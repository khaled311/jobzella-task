type TModalType = "groups" | "tasks";
type TTaskType = "todo" | "progress" | "done";
type TTaskStatus = { payload: TTaskType };
type TStore = { isOpen: boolean; modal: TModalType; status: TTaskType };
type TColumns = { color: string; name: string }[];
type TTask = {
  id: number;
  name: string;
  status: TTaskType;
};

type TTasks = Record<TTaskType, TTask[]>;

type IGroup = {
  id: number;
  name: string;
};

type Inputs = {
  email: string;
  password: string;
};

type loginData = {
  email: string;
  password: string;
};
