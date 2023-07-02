import * as React from "react";
import type { SVGProps } from "react";
const SvgLineArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 13 6.293-6.293a1 1 0 0 1 1.414 0L19 13M5 18h14"
    />
  </svg>
);
export default SvgLineArrowUp;
