import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChart2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 9h4v10h-4V9ZM17 5h4v14h-4V5ZM3 14h4v5H3v-5Z"
    />
  </svg>
);
export default SvgBarChart2;
