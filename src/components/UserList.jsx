import React, { useEffect } from "react";
import { List, ListItem, Text } from "@chakra-ui/layout";
import UserItem from "./UserItem";
import CustomScrollbar from "./CustomScrollBar";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/users";

function UserList({ dispatch, users }) {
  // useEffect(async () => {
  //   dispatch(getUsers());
  // }, [users]);

  const localUsers = [
    {
      id: 1,
      name: "Yuvaraj",
      profile:
        "https://assets.about.me/background/users/y/u/v/yuvarajn25_1550491333_163.jpg",
    },
    {
      id: 2,
      name: "Yuvaraj Nithynandan",
    },
  ];

  for (let i = 3; i <= 100; i++)
    localUsers.push({ id: i, name: `Yuvaraj ${i}` });
  return (
    <CustomScrollbar scrolltobottom={false} style={{ width: "300px" }}>
      <List margin="0px 0px 20px 0px">
        {localUsers.map((user) => (
          <ListItem key={user.id}>
            <UserItem user={user} />
          </ListItem>
        ))}
      </List>
    </CustomScrollbar>
  );
}

export default connect()(UserList);
