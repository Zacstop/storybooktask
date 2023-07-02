import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChart1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 10h4v9h-4v-9ZM10 5h4v14h-4V5ZM3 13h4v6H3v-6Z"
    />
  </svg>
);
export default SvgBarChart1;
