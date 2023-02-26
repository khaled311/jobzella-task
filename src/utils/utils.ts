import axios from "axios";

export const getTasks = async (id: string) => {
  const { data } = await axios.get(`tasks?group_id=${id}`).then((res) => res);
  return data?.data;
};

export const updateTaskStatus = async (id: string, column: string) => {
  await axios.patch(`tasks/${id}`, { status: column });
};

export const getGroups = async () => {
  const { data } = await axios.get("groups").then((res) => res);
  return data?.data;
};
