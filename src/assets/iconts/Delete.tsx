import * as React from "react";
import type { SVGProps } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 11v6m4-6v6M4 7h16M6 7v11a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7H6Zm9 0V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2h6Z"
    />
  </svg>
);
export default SvgDelete;
