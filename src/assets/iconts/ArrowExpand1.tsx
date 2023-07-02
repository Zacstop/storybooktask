import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowExpand1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 9 5 5m0 0v4m0-4h4m6 4 4-4m0 0h-4m4 0v4M9 15l-4 4m0 0h4m-4 0v-4m10 0 4 4m0 0v-4m0 4h-4"
    />
  </svg>
);
export default SvgArrowExpand1;
