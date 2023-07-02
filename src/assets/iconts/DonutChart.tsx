import * as React from "react";
import type { SVGProps } from "react";
const SvgDonutChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.657 17.657A8.001 8.001 0 1 1 12 4m5.657 13.657-3.394-3.394m3.394 3.394A8 8 0 0 0 12 4m0 0v4.8m0 0a3.2 3.2 0 1 0 2.263 5.463M12 8.8a3.2 3.2 0 0 1 2.263 5.463"
    />
  </svg>
);
export default SvgDonutChart;
