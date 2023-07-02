import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipToNext = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 8v8m-4.14-4.814L8.582 8.13A1 1 0 0 0 7 8.943v6.114a1 1 0 0 0 1.581.813l4.28-3.056a1 1 0 0 0 0-1.628Z"
    />
  </svg>
);
export default SvgSkipToNext;
