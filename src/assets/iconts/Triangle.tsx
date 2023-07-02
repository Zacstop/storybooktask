import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.838 18.51 7.29-12.96a1 1 0 0 1 1.744 0l7.29 12.96A1 1 0 0 1 19.29 20H4.71a1 1 0 0 1-.872-1.49Z"
    />
  </svg>
);
export default SvgTriangle;
