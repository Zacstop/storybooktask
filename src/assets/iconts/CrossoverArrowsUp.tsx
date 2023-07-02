import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossoverArrowsUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 19 5 5m0 0h4M5 5v4m14-4v4m0-4h-4m4 0-4.375 4.375M5 19l4.375-4.375"
    />
  </svg>
);
export default SvgCrossoverArrowsUp;
