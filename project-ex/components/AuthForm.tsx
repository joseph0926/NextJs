import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import { FC, useState } from "react";
import NextImage from "next/image";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await auth(mode, {
      email,
      password,
    });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box width="100vw" height="100vh" bg="black" color="white">
      <Flex justify="center" align="center" height="100px" borderBottom="white 1px solid">
        <NextImage src="/logo.svg" alt="logo" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="30px" bg="gray.900" borderRadius="6px">
          <form onSubmit={submitHandler}>
            <Input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button
              type="submit"
              bg="green.500"
              marginTop="1.5rem"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
