import * as React from "react";
import type { SVGProps } from "react";
const SvgLayout1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4m0-16h8a2 2 0 0 1 2 2v6M10 4v8m0 8h8a2 2 0 0 0 2-2v-6m-10 8v-8m0 0h10"
    />
  </svg>
);
export default SvgLayout1;
