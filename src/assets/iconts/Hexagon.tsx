import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 2.289a1 1 0 0 1 1 0l7.66 4.422a1 1 0 0 1 .5.866v8.846a1 1 0 0 1-.5.866L12.5 21.71a1 1 0 0 1-1 0L3.84 17.29a1 1 0 0 1-.5-.866V7.577a1 1 0 0 1 .5-.866L11.5 2.29Z"
    />
  </svg>
);
export default SvgHexagon;
