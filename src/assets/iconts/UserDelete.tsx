import * as React from "react";
import type { SVGProps } from "react";
const SvgUserDelete = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 20v-1a5 5 0 0 1 5-5h3.75M16 15l2.5 2.5m0 0L21 20m-2.5-2.5L21 15m-2.5 2.5L16 20M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default SvgUserDelete;
