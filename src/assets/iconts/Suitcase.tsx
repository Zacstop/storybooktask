import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcase = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 13h16M4 13a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5m-8-1v2m3-6V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2h6Z"
    />
  </svg>
);
export default SvgSuitcase;
