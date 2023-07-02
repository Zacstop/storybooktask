import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderInner = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 12h8m0 0h8m-8 0v8m0-8V4M8 4h.01M4 8h.01M8 20h.01M4 4h.01M16 4h.01M4 16h.01M20 8h.01M20 4h.01M20 16h.01M4 20h.01M16 20h.01M20 20h.01"
    />
  </svg>
);
export default SvgBorderInner;
