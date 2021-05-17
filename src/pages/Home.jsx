import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ChatWindow from "../components/ChatWindow";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import { getMessages } from "../redux/actions/messages";

function Home({ dispatch }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) dispatch(getMessages());
  }, [loading]);
  return (
    <Flex
      border="1px solid #000"
      direction="column"
      width="100%"
      height="100vh"
    >
      <Header user={{ name: "Yuvaraj" }} />
      <Flex height="93vh">
        <Box width="400px" maxHeight="93vh">
          <SearchBar />
          <UserList />
        </Box>
        <ChatWindow />
      </Flex>
    </Flex>
  );
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};
export default connect(mapStateToProps)(Home);
