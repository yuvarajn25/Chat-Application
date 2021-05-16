const initialState = {
  users: [],
  openUserProfile: false,
  currentUser: { name: "" },
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

    default:
      return state;
  }
}
