import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.5 5 6.293 6.293a1 1 0 0 1 0 1.414L5.5 19m8-14 6.293 6.293a1 1 0 0 1 0 1.414L13.5 19"
    />
  </svg>
);
export default SvgDoubleArrowRight;
