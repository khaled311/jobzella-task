import { Plus, Star } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { changeTaskStatus, openModal } from "../../store/store";
import { Column, Modal } from "..";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { getAccessTokenFromLocalStorage } from "../../utils/localStorage";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const getTasks = async (id: string) => {
  const { data } = await axios.get(`tasks?group_id=${id}`).then((res) => res);
  return data?.data;
};

const updateTaskStatus = async (id: string, column: string) => {
  await axios.patch(`tasks/${id}`, { status: column });
};

const MainContent = () => {
  const [dndTasks, setDndTasks] = useState([]);
  const { id } = useParams();
  const { refetch, isLoading } = useQuery(
    "tasks",
    () => getTasks(id as string),
    {
      onSuccess: (data) => {
        setDndTasks(data);
      },
    }
  );

  const colmuns = [
    { color: "#973FCF", name: "To Do" },
    {
      color: "#FFA500",
      name: "In Progress",
    },
    { color: "#68B266", name: "Done" },
  ];

  const store: any = useSelector<TStore>((state) => state);
  const dispatch = useDispatch();
  const token = getAccessTokenFromLocalStorage();
  if (!token) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    refetch();
  }, [id, store.isOpen]);

  const onDragEnd = async (result: any, columns: any, setColumns: any) => {
    const taskId = result.draggableId;
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn];
      const destItems = [...destColumn];

      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, {
        ...removed,
        status: destination.droppableId,
      });

      await setColumns({
        ...columns,
        [source.droppableId]: [...sourceItems],
        [destination.droppableId]: [...destItems],
      });

      updateTaskStatus(taskId, destination.droppableId);
    }
  };

  if (isLoading) return null;
  return (
    <div className="p-[45px_100px_45px_40px] bg-[#FBFBFB] min-h-full">
      {store.isOpen ? (
        <Modal modalType={store.modal} groupId={id as string} />
      ) : null}

      {/* top */}
      <div className="flex justify-between w-full">
        {/* Left  */}
        <div className="flex w-full">
          <div className="flex items-center gap-x-5 gap-y-0 flex-wrap">
            <p className="text-[#323338] text-xs mb-2 w-full">
              Task Meter <span className="text-[#4483F7] font-bold">25</span>/50
            </p>
            <div className="w-[230px] rounded-lg h-[10px] bg-[#DBEEF5]">
              <div className="w-[122px] h-full rounded-lg bg-[#00587A]"></div>
            </div>
            <div className="flex items-center gap-[7px]">
              <Star />
              <p className="text-[#FFA800] text-xs leading-[15px]">Good Job!</p>
            </div>
          </div>
          <button
            className="flex items-center justify-center rounded-2xl bg-[#00587A] gap-[11px] h-[44px] hover:bg-[#00587A]/80 transition-all ml-auto w-[200px]"
            onClick={() => {
              dispatch(openModal("tasks"));
            }}
          >
            <Plus />
            <span className="text-white font-semibold text-lg">Add Task</span>
          </button>
        </div>
        {/* Left  */}
      </div>
      {/* top */}

      {/* Main */}
      <div className="flex gap-4 w-full mt-6">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, dndTasks, setDndTasks)}
        >
          {Object.keys(dndTasks)?.map((item: string, index: number) => (
            <Column
              columnStatus={item}
              index={index}
              tasks={dndTasks}
              colmuns={colmuns}
              key={uuid()}
            />
          ))}
        </DragDropContext>
      </div>
      {/* Main */}
    </div>
  );
};

export default MainContent;
