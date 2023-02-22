import * as React from "react";

function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={15} fill="none" {...props}>
      <path
        d="M11 2a9.77 9.77 0 018.82 5.5A9.77 9.77 0 0111 13a9.77 9.77 0 01-8.82-5.5A9.77 9.77 0 0111 2zm0-2C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5zm0-2C8.52 3 6.5 5.02 6.5 7.5S8.52 12 11 12s4.5-2.02 4.5-4.5S13.48 3 11 3z"
        fill="#4C4E64"
        fillOpacity={0.54}
      />
    </svg>
  );
}

const MemoEye = React.memo(Eye);
export default MemoEye;
