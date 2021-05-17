import moment from "moment";
import supabase from "../../supabase";

export const getMessages = () => {
  return async (dispatch, getState) => {
    const authUser = supabase.auth.user();
    const { id: userId } = authUser;
    console.log({ userId });
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .or(`from_user.eq.${userId},to_user.eq.${userId}`)
      .order("created_at");
    console.log({ data, error });
    if (!data) return;
    const messages = data.reduce((res, item) => {
      const groupUserId =
        item.from_user === userId ? item.to_user : item.from_user;
      res[groupUserId] = [...(res[groupUserId] || []), item];
      return res;
    }, {});
    dispatch({ type: "SET_MESSAGES", messages });
  };
};

export const postMessage = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log({ state });
    const {
      users: { selectedUser },
    } = state;
    const authUser = supabase.auth.user();
    const { id: userId } = authUser;
    const message = {
      ...payload,
      to_user: selectedUser.id,
      from_user: userId,
      created_at: moment().unix(),
    };
    dispatch({ type: "POST_MESSAGE", userId, message });
    const { data, error } = await supabase.from("messages").insert([
      {
        ...message,
        to_user: selectedUser.id,
        from_user: userId,
        created_at: moment().unix(),
      },
    ]);

    console.log({ data, error });
  };
};
