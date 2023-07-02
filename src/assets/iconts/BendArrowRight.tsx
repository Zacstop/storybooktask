import * as React from "react";
import type { SVGProps } from "react";
const SvgBendArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 6v4a4 4 0 0 0 4 4h10m0 0-4 4m4-4-4-4"
    />
  </svg>
);
export default SvgBendArrowRight;
