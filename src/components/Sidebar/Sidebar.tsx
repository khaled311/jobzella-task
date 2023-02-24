import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Plus } from "../../assets";
import { openModal } from "../../store/store";

interface IGroup {
  id: number;
  name: string;
}

const getGroups = async () => {
  const { data } = await axios.get("groups").then((res) => res);
  return data?.data;
};

const Sidebar = () => {
  const { data: groups } = useQuery("groups", getGroups);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F3F3F3] p-[30px_27px_30px_60px] w-[287px] h-screen shrink-0">
      <div>
        <img src="/assets/Group644.png" alt="logo" />
      </div>
      {/* Groups */}
      <div className="mt-12">
        <h3 className="capitalize font-bold text-base mb-2 text-[#373F51]">
          groups
        </h3>
        <ul className="max-h-[500px] overflow-y-auto">
          {groups?.map((item: IGroup) => (
            <li key={item?.id}>
              <Link
                to={`/home/${item?.id}`}
                className="flex gap-[15px] cursor-pointer p-[10px_20px_10px_8px] hover:bg-[#00587A0D] transition-colors rounded-lg"
              >
                {/* <img src="/assets/svgexport-61.png" alt="" className="shrink-0" /> */}
                <p className="font-semibold text-[#8D8D8D] text-lg capitalize">
                  {item?.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="flex items-center justify-center rounded-2xl bg-[#00587A] gap-[11px] w-full h-[44px] mt-6 hover:bg-[#00587A]/80 transition-all"
          onClick={() => dispatch(openModal("groups"))}
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
