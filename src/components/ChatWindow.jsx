import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { connect } from "react-redux";
import { postMessage } from "../redux/actions/messages";
import MessageList from "./MessageList";
import UserItem from "./UserItem";

function ChatWindow({ dispatch, users: { selectedUser } }) {
  const [message, setMessage] = useState("");

  const onChange = (event) => setMessage(event.target.value);

  const sendMessage = () => {
    if (message === "") return;
    dispatch(postMessage({ content: message, type: "text" }));
    setMessage("");
  };
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
        <Input type="text" value={message} onChange={onChange} />
        <Icon
          onClick={sendMessage}
          cursor="hand"
          as={FiSend}
          width="70px"
          fontSize="1.5em"
        />
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};
export default connect(mapStateToProps)(ChatWindow);
