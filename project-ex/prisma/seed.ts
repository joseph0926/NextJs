import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./dummyData";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );

  const salt = bcrypt.genSaltSync();

  const user = await prisma.user.upsert({
    where: { email: "test01@test.com" },
    update: {},
    create: {
      email: "test01@test.com",
      password: bcrypt.hashSync("12345678", salt),
    },
  });

  const songs = await prisma.song.findMany({});

  await Promise.all(
    new Array(10).fill(1).map(async (_, idx) => {
      return prisma.playList.create({
        data: {
          name: `PlayList #${idx + 1}`,
          user: {
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      });
    })
  );
};

run()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
