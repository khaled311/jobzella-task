import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Plus, Spinner } from "../../assets";
import { openModal } from "../../store/store";
import { getGroups } from "../../utils/utils";
import Groups from "../Groups/Groups";

const Sidebar = () => {
  const [groups, setGroups] = useState([]);
  const { isLoading } = useQuery("groups", getGroups, {
    onSuccess: (data) => {
      setGroups(data);
    },
  });
  const dispatch = useDispatch();

  if (isLoading) return <Spinner />;
  return (
    <>
      <div>
        <img src="/assets/Group644.png" alt="logo" />
      </div>

      <div className="mt-12">
        <h3 className="capitalize font-bold text-base mb-2 text-[#373F51]">
          groups
        </h3>

        <Groups groups={groups} />

        <button
          className="flex items-center justify-center rounded-2xl bg-[#00587A] gap-[11px] w-full h-[44px] mt-6 hover:bg-[#00587A]/80 transition-all"
          onClick={() => dispatch(openModal("groups"))}
        >
          <Plus />
          <span className="text-white font-semibold text-lg">Add Group</span>
        </button>
      </div>
      {/* Groups */}
    </>
  );
};

export default Sidebar;
