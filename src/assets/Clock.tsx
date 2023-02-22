import * as React from "react";

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={11} height={11} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_15_585)" fill="#5AC3DD">
        <path d="M5.5 10.313a4.813 4.813 0 110-9.626 4.813 4.813 0 010 9.626zm0-8.938a4.125 4.125 0 100 8.25 4.125 4.125 0 000-8.25z" />
        <path d="M7.078 7.562L5.156 5.641V2.406h.688v2.95l1.718 1.722-.484.484z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_15_585">
          <path fill="#fff" d="M0 0h11v11H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoClock = React.memo(Clock);
export default MemoClock;
