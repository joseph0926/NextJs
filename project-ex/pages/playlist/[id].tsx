import MainLayout from "../../components/MainLayout";
import SongTable from "../../components/SongsTable";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const getBGColor = (id) => {
  const colors = ["red", "green", "blue", "orange", "purple", "gray", "teal", "yellow"];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const PlayList = ({ playlist }) => {
  const color = getBGColor(playlist.id);

  return (
    <MainLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongTable songs={playlist.songs} />
    </MainLayout>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const { id } = validateToken(req.cookies.ACCESS_TOKEN);

  const [playlist] = await prisma.playList.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: { artist: { select: { name: true, id: true } } },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default PlayList;
