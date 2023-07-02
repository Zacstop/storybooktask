import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 5 14 14M5 5h5M5 5v5m14 9v-5m0 5h-5"
    />
  </svg>
);
export default SvgArrowDiagonal;
