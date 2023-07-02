import * as React from "react";
import type { SVGProps } from "react";
const SvgLayout2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 9v9a2 2 0 0 0 2 2h4M4 9V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M4 9h6m10 0v9a2 2 0 0 1-2 2h-8M20 9H10m0 0v11"
    />
  </svg>
);
export default SvgLayout2;
