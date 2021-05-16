import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Flex, Text } from "@chakra-ui/layout";

function UserItem({ user }) {
  return (
    <Flex
      width="100%"
      alignContent="center"
      padding="10px"
      borderBottom="1px solid"
      borderColor="gray.100"
      alignItems="center"
    >
      <Avatar name={user.name} src={user.profile} mr={5} />
      <Text>{user.name}</Text>
    </Flex>
  );
}

export default UserItem;
