import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 5H6a2 2 0 0 0-2 2v3m4-5h8M8 5V3m0 2v2m8-2h2a2 2 0 0 1 2 2v3m-4-5V3m0 2v2m4 3H4m16 0v1.75M4 10v9a2 2 0 0 0 2 2h6m3.025-5.975a3.5 3.5 0 1 0 4.95 4.95m-4.95-4.95a3.5 3.5 0 1 1 4.95 4.95m-4.95-4.95 4.95 4.95"
    />
  </svg>
);
export default SvgCalendarBlock;
