import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomOut1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4v3a2 2 0 0 0 2 2h3M9 4v3a2 2 0 0 1-2 2H4m11 11v-3a2 2 0 0 1 2-2h3M9 20v-3a2 2 0 0 0-2-2H4"
    />
  </svg>
);
export default SvgZoomOut1;
