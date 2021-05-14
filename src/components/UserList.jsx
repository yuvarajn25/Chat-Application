import React from "react";
import { List, ListItem, Text } from "@chakra-ui/layout";
import UserItem from "./UserItem";
import { Box } from "@chakra-ui/layout";
import CustomScrollbar from "./CustomScrollBar";

function UserList() {
  const users = [
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

  for (let i = 3; i <= 100; i++) users.push({ id: 1, name: `Yuvaraj ${i}` });
  return (
    <CustomScrollbar style={{ width: "300px" }}>
      <List margin="0px 0px 20px 0px">
        {users.map((user) => (
          <ListItem key={user.id}>
            <UserItem user={user} />
          </ListItem>
        ))}
      </List>
    </CustomScrollbar>
  );
}

export default UserList;
