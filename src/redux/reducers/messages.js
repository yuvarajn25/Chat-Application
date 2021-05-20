const initialState = {
  messages: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGES": {
      return {
        ...state,
        messages: action.messages,
      };
    }
    case "POST_MESSAGE": {
      const { to_user } = action.message;
      return {
        ...state,
        messages: {
          ...state.messages,
          [to_user]: [...(state.messages[to_user] || []), action.message],
        },
      };
    }
    case "RECEIVED_MESSAGE": {
      console.log(`action`, action);
      const { from_user } = action.message;
      return {
        ...state,
        messages: {
          ...state.messages,
          [from_user]: [...(state.messages[from_user] || []), action.message],
        },
      };
    }
    default:
      return state;
  }
}
