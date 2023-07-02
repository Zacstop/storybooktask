import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossoverArrowsLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 5 5 19m0 0v-4m0 4h4M5 5h4M5 5v4m0-4 4.375 4.375M19 19l-4.375-4.375"
    />
  </svg>
);
export default SvgCrossoverArrowsLeft;
