import * as React from "react";

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} fill="none" {...props}>
      <path
        d="M9 4.5a.75.75 0 01.75.75v3h3a.75.75 0 110 1.5h-3v3a.75.75 0 11-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 019 4.5z"
        fill={props.fill ? props.fill : "#fff"}
      />
      <path
        d="M0 9a9 9 0 1118 0A9 9 0 010 9zm9-7.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"
        fill={props.fill ? props.fill : "#fff"}
      />
    </svg>
  );
}

const MemoPlus = React.memo(Plus);
export default MemoPlus;
