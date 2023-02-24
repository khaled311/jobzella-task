import { Clock, Files } from "../../assets";

type Props = {
  colmuns: any;
  item: any;
  index: number;
  cardColor: string;
  status: string;
};

const Card = ({ item, cardColor, status }: Props) => {
  return (
    <div className={`p-[13px] bg-[#F9F9F9] [&:not(first)]:mt-[17px]`}>
      {/* Details */}
      <h2 className="font-nunito font-semibold text-sm text-[#0D062D] mb-[2px]">
        {item.name}
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
        className={`flex items-center h-[6px] bg-opacity-10 rounded-[10px] mt-[20px] bg-[${cardColor}]`}
      >
        <div
          className={`bg-[${cardColor}] h-[6px] ${
            status === "todo"
              ? "w-[0px]"
              : status === "progress"
              ? "w-[60%]"
              : "w-[100%]"
          } rounded-[10px]`}
        ></div>
      </div>
      {/* Progress */}
    </div>
  );
};

export default Card;
