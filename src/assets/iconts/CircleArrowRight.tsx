import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 12h10m0 0-2.5 2.5M17 12l-2.5-2.5M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z"
    />
  </svg>
);
export default SvgCircleArrowRight;
