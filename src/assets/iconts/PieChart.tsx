import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.657 17.657A8.001 8.001 0 1 1 12 4m5.657 13.657L12 12V4m5.657 13.657A8 8 0 0 0 12 4"
    />
  </svg>
);
export default SvgPieChart;
