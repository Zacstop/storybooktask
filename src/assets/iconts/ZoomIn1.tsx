import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomIn1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 15v3a2 2 0 0 0 2 2h3m6.217 0H18a2 2 0 0 0 2-2v-3m0-6V6a2 2 0 0 0-2-2h-3M4 9V6a2 2 0 0 1 2-2h3"
    />
  </svg>
);
export default SvgZoomIn1;
