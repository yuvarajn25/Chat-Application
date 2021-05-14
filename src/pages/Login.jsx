import React from "react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex, Heading, Text } from "@chakra-ui/layout";

function Login() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" backgroundColor="gray.100" p={12} rounded={6}>
        <Text mb={6} textAlign="center" fontWeight="bold">
          Login
        </Text>
        <Input mb={6} variant="filled" placeholder="Email" type="email" />
        <Input type="password" mb={6} variant="filled" placeholder="Password" />
        <Button colorScheme="linkedin">Login</Button>
      </Flex>
    </Flex>
  );
}

export default Login;
