type TModalType = "groups" | "tasks";
type TTaskType = "todo" | "progress" | "done";
type TTaskStatus = { payload: TTaskType };
type TStore = { isOpen: boolean; modal: TModalType };
type TColumns = { color: string; name: string }[];
type TTask = {
  id: number;
  name: string;
  status: string;
};
interface TTasks {
  [key: TTaskType]: TTask[];
}
