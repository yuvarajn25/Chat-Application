import moment from "moment";
import supabase from "../../supabase";

export const getMessages = () => {
  return async (dispatch, getState) => {
    const authUser = supabase.auth.user();
    const { id: userId } = authUser;
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .or(`from_user.eq.${userId},to_user.eq.${userId}`)
      .order("created_at");
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

const hasActiveSubscription = (subscriptions, user) => {
  const messageSubscription = subscriptions.filter((s) =>
    s.topic.includes(`messages:to_user=eq`)
  );
  if (!messageSubscription.length) return false;

  const currentUserSubscription = messageSubscription.find((s) =>
    s.topic.includes(user.id)
  );
  if (currentUserSubscription) return true;
  supabase.removeSubscription(messageSubscription[0]);
  return false;
};

export const subscribe = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const {
      users: { selectedUser },
    } = state;
    const authUser = supabase.auth.user();
    const subscriptions = supabase.getSubscriptions();
    console.log({ subscriptions });
    if (hasActiveSubscription(subscriptions, authUser)) return;
    const mySubscription = supabase
      .from(`messages:to_user=eq.${authUser.id}`)
      .on("INSERT", (payload) => {
        console.log("New message recevied!", payload);
        dispatch({ type: "RECEIVED_MESSAGE", message: payload.new });
      })
      .subscribe(console.log);

    console.log({ mySubscription });
  };
};
