import * as React from "react";
import type { SVGProps } from "react";
const SvgThreeColumn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.333 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.333m0 16V4m0 16h5.334M9.333 4h5.334m0 0H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.333m0-16v16"
    />
  </svg>
);
export default SvgThreeColumn;
