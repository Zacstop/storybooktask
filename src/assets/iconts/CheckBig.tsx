import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckBig = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M4 13.286 8.8 18 20 7"
    />
  </svg>
);
export default SvgCheckBig;
