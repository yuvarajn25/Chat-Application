import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/layout";
import CustomScrollbar from "./CustomScrollBar";
import { connect } from "react-redux";
import { Flex } from "@chakra-ui/layout";

function MessageList({ messages = [], currentUser = {} }) {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollToBottom();
  }, [messages]);
  return (
    <CustomScrollbar scrollRef={scrollRef} scrolltobottom={true}>
      <Box backgroundColor="#34b7f1" height="inherit">
        {messages.map((m, i) => (
          <p
            className={
              currentUser.id === m.from_user
                ? "message-item message-sent"
                : "message-item message-received"
            }
            key={m.id}
          >
            {m.content}
          </p>
        ))}
      </Box>
    </CustomScrollbar>
  );
}

const mapStateToProps = (
  { users: { selectedUser, currentUser }, messages },
  props
) => {
  return {
    messages: messages.messages[selectedUser.id],
    currentUser,
    ...props,
  };
};
export default connect(mapStateToProps)(MessageList);
