import supabase from "./supabase";

export const imageToURL = async (key) => {
  if (!key || key === "") return;

  const bucketName = key.split("/")[0];
  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(key.substring(bucketName.length + 1));
  if (error) {
    throw error;
  }
  return URL.createObjectURL(data);
};
