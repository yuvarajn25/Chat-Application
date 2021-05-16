import React, { useEffect, useState } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { imageToURL } from "../utils";

function UserMenu({ users: { currentUser }, dispatch }) {
  const [profileUrl, setProfileUrl] = useState(null);

  const loadProfile = async () => {
    const profile = await imageToURL(currentUser.profile);
    setProfileUrl(profile);
  };

  useEffect(async () => {
    // if (currentUser.name.length === 0) openUserProfile();
    loadProfile();
  }, [currentUser]);

  const openUserProfile = () => {
    dispatch({ type: "OPEN_USER_PROFILE" });
  };

  return (
    <Box float="right" paddingRight="10px">
      <UserProfile />
      <Menu isLazy>
        <MenuButton>
          <Avatar name={currentUser.name} src={profileUrl} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={openUserProfile}>Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

export default connect(mapStateToProps)(UserMenu);
