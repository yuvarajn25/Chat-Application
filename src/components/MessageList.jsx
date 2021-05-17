import React from "react";
import { Box } from "@chakra-ui/layout";
import CustomScrollbar from "./CustomScrollBar";
import { connect } from "react-redux";
import { Flex } from "@chakra-ui/layout";

function MessageList({ messages = [], currentUser = {} }) {
  console.log(messages);
  return (
    <CustomScrollbar scrolltobottom={true}>
      <Box backgroundColor="#34b7f1" height="100%" direction="column-reverse">
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
  console.log(messages);
  console.log(selectedUser);
  return {
    messages: messages.messages[selectedUser.id],
    currentUser,
    ...props,
  };
};
export default connect(mapStateToProps)(MessageList);
