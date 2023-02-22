import { useDispatch } from "react-redux";
import { Plus } from "../../assets";
import { openModal } from "../../store/store";

type Props = {};

const Sidebar = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#F3F3F3] p-[30px_27px_30px_60px] w-[287px] h-screen shrink-0">
      <div>
        <img src="/assets/Group644.png" alt="logo" />
      </div>
      {/* Groups */}
      <div className="mt-12">
        <h3 className="uppercase text-xs mb-2 text-[#373F51]">groups</h3>
        <ul className="">
          <li className="flex gap-[15px] cursor-pointer p-[10px_20px_10px_8px] hover:bg-[#00587A0D] transition-colors rounded-lg">
            <img src="/assets/svgexport-61.png" alt="" className="shrink-0" />
            <p className="font-semibold text-[#8D8D8D] text-lg">Design</p>
          </li>
          <li className="flex gap-[15px] cursor-pointer p-[10px_20px_10px_8px] hover:bg-[#00587A0D] transition-colors rounded-lg">
            <img src="/assets/svgexport-71.png" alt="" className="shrink-0" />
            <p className="font-semibold text-[#8D8D8D] text-lg">Development</p>
          </li>
          <li className="flex gap-[15px] cursor-pointer p-[10px_20px_10px_8px] hover:bg-[#00587A0D] transition-colors rounded-lg">
            <img src="/assets/svgexport-81.png" alt="" className="shrink-0" />
            <p className="font-semibold text-[#8D8D8D] text-lg">Marketing</p>
          </li>
          <li className="flex gap-[15px] cursor-pointer p-[10px_20px_10px_8px] hover:bg-[#00587A0D] transition-colors rounded-lg">
            <img
              src="/assets/svgexport-7(1)1.png"
              alt=""
              className="shrink-0"
            />
            <p className="font-semibold text-[#8D8D8D] text-lg">Requirement</p>
          </li>
        </ul>
        <button
          className="flex items-center justify-center rounded-2xl bg-[#00587A] gap-[11px] w-full h-[44px] mt-6 hover:bg-[#00587A]/80 transition-all"
          onClick={() => dispatch(openModal("group"))}
        >
          <Plus />
          <span className="text-white font-semibold text-lg">Add Group</span>
        </button>
      </div>
      {/* Groups */}
    </div>
  );
};

export default Sidebar;
