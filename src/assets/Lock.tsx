import * as React from "react";

function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={15} fill="none" {...props}>
      <path
        d="M10 5.667V3.764c.021-.963-.387-1.895-1.137-2.591C8.113.476 7.084.073 6 .049 4.916.072 3.887.476 3.137 1.173 2.387 1.869 1.979 2.8 2 3.764v1.903H.5v7.555c0 .236.105.462.293.629.187.166.442.26.707.26h9c.265 0 .52-.094.707-.26a.842.842 0 00.293-.629V5.667H10zM3 3.764c-.022-.727.282-1.433.844-1.963S5.181.961 6 .938c.819.023 1.594.333 2.156.863S9.022 3.037 9 3.764v1.903H3V3.764zm-1.5 9.458V6.556h9v6.666h-9z"
        fill="#ABAEB0"
      />
    </svg>
  );
}

const MemoLock = React.memo(Lock);
export default MemoLock;
