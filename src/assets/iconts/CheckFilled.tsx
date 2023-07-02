import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#141C24" rx={12} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 13 3 3 7-7"
    />
  </svg>
);
export default SvgCheckFilled;
