import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 14.5 19 19M8 10h2m0 0h2m-2 0V8m0 2v2m6-2a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
  </svg>
);
export default SvgZoomIn;
