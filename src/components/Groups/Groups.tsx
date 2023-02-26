import React from "react";
import { NavLink } from "react-router-dom";

interface IGroups {
  groups: IGroup[];
}

const Groups = ({ groups }: IGroups) => {
  return (
    <ul className="max-h-[500px] overflow-y-auto">
      {groups?.map((item: IGroup) => (
        <li key={item?.id}>
          <NavLink
            to={`/home/${item?.id}`}
            className="flex gap-[15px] cursor-pointer p-[10px_20px_10px_8px] hover:bg-[#00587A0D] transition-colors rounded-lg"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#00587A0D" } : undefined
            }
          >
            <img
              src="/assets/svgexport-61.png"
              alt=""
              className="shrink-0 self-baseline"
            />
            <p className="font-semibold text-[#8D8D8D] text-lg capitalize">
              {item?.name}
            </p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Groups;
