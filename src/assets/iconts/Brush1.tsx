import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.246 16 8.433-7.59a2 2 0 0 0 .076-2.9l-.264-.265a2 2 0 0 0-2.901.076L8 13.754M4 17a3 3 0 1 1 3 3H4.545A.545.545 0 0 1 4 19.454V17Z"
    />
  </svg>
);
export default SvgBrush1;
