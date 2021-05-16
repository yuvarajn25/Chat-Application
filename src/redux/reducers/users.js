const initialState = {
  users: [],
  openUserProfile: false,
  currentUser: { name: "" },
  selectedUser: { name: "" },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        users: action.users,
      };
    }
    case "OPEN_USER_PROFILE": {
      return { ...state, openUserProfile: true };
    }
    case "CLOSE_USER_PROFILE": {
      return { ...state, openUserProfile: false };
    }
    case "SET_CURRENT_USER": {
      return { ...state, currentUser: { ...action.currentUser } };
    }
    case "SET_SELECTED_USER": {
      return { ...state, selectedUser: { ...action.selectedUser } };
    }

    default:
      return state;
  }
}
