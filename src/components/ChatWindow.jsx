import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { FiSend } from "react-icons/fi";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import UserItem from "./UserItem";

function ChatWindow({ users: { selectedUser } }) {
  return (
    <Flex
      justifyItems="flex-end"
      justifyContent="flex-end"
      width="100%"
      direction="column"
      padding="0px 0px 10px 0px"
    >
      <Box height="8vh">
        <UserItem user={selectedUser} />
      </Box>
      <MessageList />
      <Flex alignItems="center" padding="10px">
        <Input type="text" />
        <Icon as={FiSend} width="70px" fontSize="1.5em" />
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};
export default connect(mapStateToProps)(ChatWindow);
