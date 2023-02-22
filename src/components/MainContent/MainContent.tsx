import { useState } from "react";
import { Clock, Files, Plus, Star } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/store";
import { Modal } from "..";
type Props = {};

interface IItem {
  color: string;
  name: string;
  count: number;
  status: string;
}

interface IStore {
  isOpen: boolean;
  modal: string;
}

const MainContent = (props: Props) => {
  const store: IStore = useSelector((state) => state) as IStore;
  const dispatch = useDispatch();

  return (
    <div className="p-[45px_100px_45px_40px] bg-[#FBFBFB] min-h-full">
      {store.isOpen ? <Modal modalName={store.modal} /> : null}
      <div className="flex gap-4"></div>
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
            onClick={() => dispatch(openModal("task"))}
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
        {[
          { color: "#973FCF", name: "To Do", count: 3, status: "toDo" },
          {
            color: "#FFA500",
            name: "In Progress",
            count: 2,
            status: "inProgress",
          },
          { color: "#68B266", name: "Done", count: 1, status: "Done" },
        ].map((item: IItem, index: number) => (
          <div className="grow bg-white rounded-lg p-4" key={index}>
            {/* Head */}
            <div className="flex gap-[8px] items-center">
              <span
                className={`w-[6px] h-[6px] rounded-full ${`bg-[${item.color}]`}`}
              ></span>
              <p className="text-[#0D062D] text-sm font-nunito font-bold">
                {item.name}
              </p>
              <span className="w-[16px] h-[16px] bg-[#E0E0E0] flex items-center justify-center rounded-full text-[10px] text-[#625F6D]">
                {item.count}
              </span>
            </div>
            <div
              className={`mt-[15px] w-full h-[2px] bg-[${item.color}] mb-[27px]`}
            ></div>
            {/* Head */}

            {/* Card */}
            <div className={`p-[13px] bg-[#F9F9F9] [&:not(first)]:mt-[17px]`}>
              {/* Details */}
              <h2 className="font-nunito font-semibold text-sm text-[#0D062D] mb-[2px]">
                UI/UX Design
              </h2>
              <p className="text-[#787486] text-xs mb-[11px]">
                Brainstorming brings team members' diverse experience into play.
              </p>
              {/* Details */}

              {/* Date */}
              <div className="flex bg-[#5AC3DD33] w-[55px] h-[20px] items-center justify-center gap-[3px] mb-[8px]">
                <Clock />
                <span className="font-medium text-[10px] leading-[15px] text-[#5AC3DD]">
                  5 May
                </span>
              </div>
              {/* Date */}

              {/* Extras */}
              <div className="flex justify-between">
                {/* Images */}
                <div className="flex space-x-[-5px]">
                  <img src="/assets/Ellipse12.png" alt="" />
                  <img src="/assets/Ellipse13.png" alt="" />
                  <img src="/assets/Ellipse15.png" alt="" />
                </div>
                {/* Images */}

                {/* Files */}
                <div className="flex gap-[5px]">
                  <Files />
                  <span className="text-[#787486] text-[10px] leading-[15px] font-medium">
                    0 Files
                  </span>
                </div>
                {/* Files */}
              </div>
              {/* Extras */}

              {/* Progress */}
              <div
                className={`flex items-center h-[6px] bg-opacity-10 rounded-[10px] mt-[20px] ${
                  item.status === "toDo"
                    ? "bg-[#973FCF]"
                    : item.status === "inProgress"
                    ? "bg-[#FFA500]"
                    : "bg-[#68B266]"
                }`}
              >
                <div
                  className={`bg-[${item.color}] h-[6px] ${
                    item.status === "toDo"
                      ? "w-[0px]"
                      : item.status === "inProgress"
                      ? "w-[60%]"
                      : "w-[100%]"
                  } rounded-[10px]`}
                ></div>
              </div>
              {/* Progress */}
            </div>
            {/* Card */}
            <button
              className="flex items-center justify-center rounded-2xl border border-dashed border-[#00587A4D] w-full h-[44px] mt-6"
              onClick={() => dispatch(openModal("task"))}
            >
              <Plus fill="#00587A" />
            </button>
          </div>
        ))}
      </div>
      {/* Main */}
    </div>
  );
};

export default MainContent;
