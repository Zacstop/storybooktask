import * as React from "react";
import type { SVGProps } from "react";
const SvgTimerOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 4 17 17M17 7l1-1m-8-3h4m-3.268 3.115a7 7 0 0 1 8.135 8.253M17.361 17.5a7 7 0 1 1-9.797-9.916"
    />
  </svg>
);
export default SvgTimerOff;
