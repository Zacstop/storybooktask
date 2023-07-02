import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDivide = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 17v-5m0 0V7m0 5H3m0 0 3 3m-3-3 3-3m8 8v-5m0 0V7m0 5h7m0 0-3 3m3-3-3-3"
    />
  </svg>
);
export default SvgArrowDivide;
