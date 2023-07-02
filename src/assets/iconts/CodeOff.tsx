import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeOff = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m5 5 14 14M8 8l-3.823 3.823a.25.25 0 0 0 0 .354L9 17m6-10 4.823 4.823a.25.25 0 0 1 0 .354L17.5 14.5M16 16l-1 1"
    />
  </svg>
);
export default SvgCodeOff;
