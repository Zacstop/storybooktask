import * as React from "react";
import type { SVGProps } from "react";
const SvgLineArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19 11-6.293 6.293a1 1 0 0 1-1.414 0L5 11m14-5H5"
    />
  </svg>
);
export default SvgLineArrowDown;
