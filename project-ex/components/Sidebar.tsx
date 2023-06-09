import NextImage from "next/image";
import Link from "next/link";
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

// const playList = new Array(30).fill(1).map((_, idx) => {
//   return `PlayList ${idx + 1}`;
// });

const Sidebar = () => {
  const { playlists, isLoading } = usePlaylist();

  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" alt="logo" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <Link href={menu.route} passHref>
                      {/* <LinkOverlay> */}
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                      {/* </LinkOverlay> */}
                    </Link>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box marginY="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => {
              return (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <Link href={menu.route} passHref>
                      {/* <LinkOverlay> */}
                      <ListIcon as={menu.icon} color="white" marginRight="20px" />
                      {menu.name}
                      {/* </LinkOverlay> */}
                    </Link>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {isLoading && <p>Loading,,</p>}
            {!isLoading &&
              playlists.map((list) => {
                return (
                  <ListItem paddingX="20px" key={list.id}>
                    <LinkBox>
                      <Link
                        href={{
                          pathname: "/playlist/[id]",
                          query: { id: list.id },
                        }}
                        passHref
                      >
                        {list.name}
                      </Link>
                    </LinkBox>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
