import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 7 3-3M4 7l3 3M4 7h9a4 4 0 0 1 4 4v9m0 0 3-3m-3 3-3-3"
    />
  </svg>
);
export default SvgArrowLeftDown;
