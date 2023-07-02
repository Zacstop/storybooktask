import * as React from "react";
import type { SVGProps } from "react";
const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 12V6a2 2 0 0 0-2-2h-6m8 8v6a2 2 0 0 1-2 2h-6m8-8h-8m-8 0v6a2 2 0 0 0 2 2h6m-8-8V6a2 2 0 0 1 2-2h6m-8 8h8m0 0V4m0 8v8"
    />
  </svg>
);
export default SvgWindow;
