import * as React from "react";

function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="#2F384F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoClose = React.memo(Close);
export default MemoClose;
