import * as React from "react";

function ChevronRightIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height={props.size}
      width={props.size}
      {...props}
    >
      <path d="M10.707 17.707L16.414 12 10.707 6.293 9.293 7.707 13.586 12 9.293 16.293z" />
    </svg>
  );
}

export default ChevronRightIcon;
