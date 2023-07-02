import * as React from "react";
import type { SVGProps } from "react";
const SvgLockPattern = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v4m0 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v4M6.5 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0h4m3 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 0h4m-4-14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);
export default SvgLockPattern;
