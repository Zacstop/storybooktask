import * as React from "react";
import type { SVGProps } from "react";
const SvgDollar = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.167 7.417-.351-.276a3 3 0 0 0-1.854-.641H9.75a2.75 2.75 0 0 0 0 5.5h4.5a2.75 2.75 0 1 1 0 5.5H9.167a3 3 0 0 1-2.027-.788L7 16.582M12 19V5"
    />
  </svg>
);
export default SvgDollar;
