import * as React from "react";

function BottomArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_1_481)">
        <path
          d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414L12 15z"
          fill="#23262F"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_481">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoBottomArrow = React.memo(BottomArrow);
export default MemoBottomArrow;
