import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Flex, Text } from "@chakra-ui/layout";
import { imageToURL } from "../utils";
import { connect } from "react-redux";

function UserItem({ user, dispatch, users: { selectedUser } }) {
  const [profileUrl, setProfileUrl] = useState(null);

  const loadProfile = async () => {
    const profile = await imageToURL(user.profile);
    setProfileUrl(profile);
  };

  const onSelect = () => {
    if (selectedUser.id !== user.id)
      dispatch({ type: "SET_SELECTED_USER", selectedUser: user });
  };

  useEffect(async () => {
    loadProfile();
  }, [user]);

  return (
    <Flex
      width="100%"
      alignContent="center"
      padding="10px"
      borderBottom="1px solid"
      borderColor="gray.100"
      alignItems="center"
      onClick={onSelect}
    >
      <Avatar name={user.name} src={profileUrl} mr={5} />
      <Text>{user.name}</Text>
    </Flex>
  );
}
const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};
export default connect(mapStateToProps)(UserItem);
