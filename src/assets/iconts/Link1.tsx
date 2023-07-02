import * as React from "react";
import type { SVGProps } from "react";
const SvgLink1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 8H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4m-1-4h6m-1-4h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4"
    />
  </svg>
);
export default SvgLink1;
