import * as React from "react";

function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={12} height={12} fill="none" {...props}>
      <path
        d="M5.416.57c.193-.594 1.034-.594 1.227 0l.932 2.867a.645.645 0 00.613.446h3.014c.626 0 .885.8.38 1.167L9.143 6.822a.645.645 0 00-.234.721l.931 2.867c.193.594-.487 1.088-.993.721L6.41 9.359a.645.645 0 00-.759 0l-2.438 1.772c-.506.367-1.186-.127-.993-.721l.931-2.867a.645.645 0 00-.234-.721L.478 5.05c-.506-.367-.246-1.167.379-1.167H3.87c.28 0 .527-.18.614-.446L5.416.57z"
        fill="#FFA800"
      />
    </svg>
  );
}

const MemoStar = React.memo(Star);
export default MemoStar;
