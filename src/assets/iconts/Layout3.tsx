import * as React from "react";
import type { SVGProps } from "react";
const SvgLayout3 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 9v9a2 2 0 0 0 2 2h8M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 9h10m6 0v9a2 2 0 0 1-2 2h-4m6-11h-6m0 0v11"
    />
  </svg>
);
export default SvgLayout3;
