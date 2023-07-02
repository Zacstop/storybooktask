import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignVerticalDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 20h16M6 16h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm9 0h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Z"
    />
  </svg>
);
export default SvgAlignVerticalDown;
