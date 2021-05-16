import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import UserMenu from "./UserMenu";

function Header() {
  return (
    <Flex
      justifyContent="space-between"
      height="7vh"
      bgColor="blue.200"
      alignItems="center"
    >
      <Text paddingLeft="10px" fontSize="1.2em" fontWeight="bold">
        Chat Application
      </Text>
      <UserMenu />
    </Flex>
  );
}

export default connect()(Header);
