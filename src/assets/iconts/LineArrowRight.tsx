import * as React from "react";
import type { SVGProps } from "react";
const SvgLineArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11 5 6.293 6.293a1 1 0 0 1 0 1.414L11 19M6 5v14"
    />
  </svg>
);
export default SvgLineArrowRight;
