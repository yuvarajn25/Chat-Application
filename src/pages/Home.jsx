import { Flex } from "@chakra-ui/layout";
import React from "react";
import ChatWindow from "../components/ChatWindow";
import Header from "../components/Header";
import UserList from "../components/UserList";

function Home() {
  return (
    <Flex
      border="1px solid #000"
      direction="column"
      width="100%"
      height="100vh"
    >
      <Header user={{ name: "Yuvaraj" }} />
      <Flex height="93vh">
        <UserList />
        <ChatWindow />
      </Flex>
    </Flex>
  );
}

export default Home;
