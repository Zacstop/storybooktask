import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20a8 8 0 0 1 0-16m0 16v-8m0 8a7.999 7.999 0 0 0 8-8m-8-8v8m0-8a8 8 0 0 1 8 8m-8 0h8"
    />
  </svg>
);
export default SvgPieChart1;
