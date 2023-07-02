import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5v5.5a5.5 5.5 0 0 0 5.5 5.5v0a5.5 5.5 0 0 0 5.5-5.5V5M7 19h11"
    />
  </svg>
);
export default SvgUnderline;
