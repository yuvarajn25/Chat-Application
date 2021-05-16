import { Input } from "@chakra-ui/input";
import React from "react";
import { connect } from "react-redux";
import { searchUsers } from "../redux/actions/users";

function SearchBar({ dispatch }) {
  const onChange = (event) => {
    dispatch(searchUsers(event.target.value));
  };

  return (
    <div style={{ padding: "15px" }}>
      <Input
        borderRadius={25}
        placeholder="Search"
        type="text"
        onChange={onChange}
      />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

export default connect(mapStateToProps)(SearchBar);
