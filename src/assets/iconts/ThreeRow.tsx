import * as React from "react";
import type { SVGProps } from "react";
const SvgThreeRow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 9V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4M4 9h16M4 9v6m16-6v6m0 0v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4m16 0H4"
    />
  </svg>
);
export default SvgThreeRow;
