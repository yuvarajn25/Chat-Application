import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { FiSend } from "react-icons/fi";
import MessageList from "./MessageList";
import UserItem from "./UserItem";

export default function ChatWindow() {
  return (
    <Flex
      justifyItems="flex-end"
      justifyContent="flex-end"
      width="100%"
      direction="column"
      padding="0px 0px 10px 0px"
    >
      <Box height="8vh">
        <UserItem user={{ name: "Yuvaraj" }} />
      </Box>
      <MessageList />
      <Flex alignItems="center" padding="10px">
        <Input type="text" />
        <Icon as={FiSend} width="70px" fontSize="1.5em" />
      </Flex>
    </Flex>
  );
}
