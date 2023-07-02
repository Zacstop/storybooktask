import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 19 6.293-6.293a1 1 0 0 1 1.414 0L19 19M5 11l6.293-6.293a1 1 0 0 1 1.414 0L19 11"
    />
  </svg>
);
export default SvgDoubleArrowUp;
