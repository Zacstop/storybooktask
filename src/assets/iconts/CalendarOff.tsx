import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 3 18 18m-1-11V7a2 2 0 0 0-2-2h-2m4 5h-7m7 0v6.5M4 10v9a2 2 0 0 0 2 2h12.672c.53 0 1.098-.191 1.271-.693A.95.95 0 0 0 20 20M4 10V5.5c0-.333.1-1 .5-1M4 10h6M8 3v2m0 0v.01M8 5h8m0-2v2m0 0v2"
    />
  </svg>
);
export default SvgCalendarOff;
