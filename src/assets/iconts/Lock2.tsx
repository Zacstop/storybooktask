import * as React from "react";
import type { SVGProps } from "react";
const SvgLock2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 10V7a4 4 0 0 0-8 0v3m4 4v3m6-2a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgLock2;
