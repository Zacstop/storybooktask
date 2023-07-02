import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#141C24"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12 17a1 1 0 0 1-1-1v-4.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1ZM12 9.5a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v.5a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfoFill;
