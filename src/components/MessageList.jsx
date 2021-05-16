import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import CustomScrollbar from "./CustomScrollBar";
import { Text } from "@chakra-ui/layout";

export default function MessageList() {
  const messages = [];

  for (let i = 1; i <= 100; i++)
    messages.push({
      id: i,
      message: `Sample Sample Sample Sample Sample Sample Sample Sample Sample  ${i}`,
    });

  return (
    <CustomScrollbar
      scrolltobottom={true}
      style={{ backgroundColor: "#34b7f1" }}
    >
      <Box backgroundColor="gray.100">
        {messages.map((m, i) => (
          <p
            className={
              i % 2 === 0
                ? "message-item message-sent"
                : "message-item message-received"
            }
            key={m.id}
          >
            {m.message}
          </p>
        ))}
      </Box>
    </CustomScrollbar>
  );
}
