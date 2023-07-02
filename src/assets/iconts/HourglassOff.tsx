import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglassOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 4 17 17M6 21h1m0 0h10M7 21v-4a5 5 0 0 1 5-5 5 5 0 0 1-5-5m10 14h1m-1 0v-4M7 3h10M7 3h-.5M7 3v.5M17 3v4a4.99 4.99 0 0 1-1.869 3.898M17 3h1"
    />
  </svg>
);
export default SvgHourglassOff;
