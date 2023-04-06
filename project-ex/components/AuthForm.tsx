import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
import { FC, useState } from "react";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  return (
    <Box width="100vw" height="100vh" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        dummy
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        form
      </Flex>
    </Box>
  );
};

export default AuthForm;
