import * as React from "react";
import type { SVGProps } from "react";
const SvgStethoscope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 4H4a1 1 0 0 0-1 1v4a5 5 0 0 0 5 5m3-10h1a1 1 0 0 1 1 1v4a5 5 0 0 1-5 5m0 0v1.5a5.5 5.5 0 1 0 11 0V14m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10 3v2M6 3v2"
    />
  </svg>
);
export default SvgStethoscope;
