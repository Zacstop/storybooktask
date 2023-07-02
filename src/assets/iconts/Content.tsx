import * as React from "react";
import type { SVGProps } from "react";
const SvgContent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 7h14M5 12h14M5 17h7"
    />
  </svg>
);
export default SvgContent;
