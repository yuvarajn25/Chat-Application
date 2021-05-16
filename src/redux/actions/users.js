import supabase from "../../supabase";

export const getUsers = () => {
  return async (dispatch, getState) => {
    const { data: users, error } = await supabase.from("users").select("*");
    console.log({ users, error });

    dispatch({ type: "SET_USERS", users });
  };
};

export const getCurrentuser = () => {
  return async (dispatch, getState) => {
    const authUser = supabase.auth.user();
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", authUser.id);
    console.log({ users, error });

    dispatch({ type: "SET_CURRENT_USER", currentUser: users[0] });
  };
};

export const saveUserProfile = (user) => {
  return async (dispatch, getState) => {
    const currentState = getState();
    const {
      users: { currentUser },
    } = currentState;
    const authUser = supabase.auth.user();
    if (user.profile && user.profile !== currentUser.profile) {
      const profileName = `profiles/${authUser.id}.png`;
      const bucketName = `chat-application`;
      console.log(`currentUser.profile`, currentUser.profile);
      if (currentUser.profile) {
        const { data, error } = await supabase.storage
          .from(bucketName)
          .update(profileName, user.profile);
        if (!data) return;
        currentUser.profile = data.Key;
      } else {
        const { data, error } = await supabase.storage
          .from(bucketName)
          .upload(profileName, user.profile);
        if (!data) return;
        currentUser.profile = data.Key;
      }
    }
    const { data, error } = await supabase
      .from("users")
      .upsert([{ id: authUser.id, ...currentUser, name: user.name }]);

    dispatch({ type: "SET_CURRENT_USER", currentUser: data[0] });
    dispatch({ type: "CLOSE_USER_PROFILE" });
  };
};
