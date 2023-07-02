import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipToPrevious = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 8v8m4.14-4.814 4.279-3.057A1 1 0 0 1 17 8.943v6.114a1 1 0 0 1-1.581.813l-4.28-3.056a1 1 0 0 1 0-1.628Z"
    />
  </svg>
);
export default SvgSkipToPrevious;
