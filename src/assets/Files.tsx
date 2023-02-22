import * as React from "react";

function Files(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={13} height={12} fill="none" {...props}>
      <path
        d="M11.646 5.5v3c0 2-.542 2.5-2.708 2.5H3.52C1.354 11 .813 10.5.813 8.5v-5c0-2 .541-2.5 2.708-2.5h.812c.813 0 .992.22 1.3.6l.813 1c.206.25.325.4.867.4h1.625c2.166 0 2.708.5 2.708 2.5z"
        stroke="#787486"
        strokeWidth={0.797}
        strokeMiterlimit={10}
      />
      <path
        d="M4.333 1h4.875c1.084 0 1.625.5 1.625 1.5v.69M7.583 7.5H4.875"
        stroke="#787486"
        strokeWidth={0.797}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoFiles = React.memo(Files);
export default MemoFiles;
