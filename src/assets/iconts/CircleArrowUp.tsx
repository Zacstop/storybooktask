import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17V7m0 0 2.5 2.5M12 7 9.5 9.5M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
    />
  </svg>
);
export default SvgCircleArrowUp;
