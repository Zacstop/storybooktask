import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossoverArrowsDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 5 14 14m0 0h-4m4 0v-4M5 19v-4m0 4h4m-4 0 4.375-4.375M19 5l-4.375 4.375"
    />
  </svg>
);
export default SvgCrossoverArrowsDown;
