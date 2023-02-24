import { Card } from "..";
import { Plus } from "../../assets";
import { changeTaskStatus, openModal } from "../../store/store";
import { useDispatch } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

type Props = {
  columnStatus: string;
  index: number;
  tasks: TTasks;
  colmuns: TColumns;
};

const Column = ({ columnStatus, index, tasks, colmuns }: Props) => {
  const dispatch = useDispatch();
  const cardColor = colmuns[index].color;

  return (
    <Droppable droppableId={columnStatus} key={uuid()}>
      {(provided, snapshot) => (
        <div
          className="grow bg-white rounded-lg p-4 w-[calc((100%-32px)/3)]"
          key={index}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {/* Head */}
          <div className="flex gap-[8px] items-center">
            <span
              className={`w-[6px] h-[6px] rounded-full ${
                columnStatus === "todo"
                  ? "bg-[#973FCF]"
                  : columnStatus === "progress"
                  ? "bg-[#FFA500]"
                  : "bg-[#68B266]"
              }`}
            ></span>
            <p className="text-[#0D062D] text-sm font-nunito font-bold">
              {colmuns[index].name}
            </p>
            <span className="w-[16px] h-[16px] bg-[#E0E0E0] flex items-center justify-center rounded-full text-[10px] text-[#625F6D]">
              {tasks[columnStatus]?.length}
            </span>
          </div>
          <div
            className={`mt-[15px] w-full h-[2px] ${
              colmuns[index].color === "#973FCF"
                ? "bg-[#973FCF]"
                : colmuns[index].color === "#FFA500"
                ? "bg-[#FFA500]"
                : "bg-[#68B266]"
            } mb-[27px]`}
          ></div>
          {/* Head */}
          {tasks[columnStatus]?.map((item: TTask, index: number) => {
            return (
              <Draggable
                key={item?.id}
                draggableId={String(item?.id)}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card
                      key={uuid()}
                      colmuns={colmuns}
                      item={item}
                      index={index}
                      cardColor={cardColor}
                      status={columnStatus}
                    />
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
          <button
            className="flex items-center justify-center rounded-2xl border border-dashed border-[#00587A4D] w-full h-[44px] mt-6"
            onClick={() => {
              dispatch(openModal("tasks"));
              dispatch(changeTaskStatus(columnStatus as TTaskType));
            }}
          >
            <Plus fill="#00587A" />
          </button>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
