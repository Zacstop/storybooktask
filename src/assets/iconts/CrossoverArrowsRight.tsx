import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossoverArrowsRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 19 19 5m0 0v4m0-4h-4m4 14h-4m4 0v-4m0 4-4.375-4.375M5 5l4.375 4.375"
    />
  </svg>
);
export default SvgCrossoverArrowsRight;
