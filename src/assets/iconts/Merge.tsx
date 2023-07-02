import * as React from "react";
import type { SVGProps } from "react";
const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 19V5m16 14V5m-1 7h-5m0 0 2-2m-2 2 2 2M5 12h5m0 0-2 2m2-2-2-2"
    />
  </svg>
);
export default SvgMerge;
