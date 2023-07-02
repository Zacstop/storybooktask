import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.528 16.702a8 8 0 1 0-1.512-4.2m0 0-1.5-1.5m1.5 1.5 1.5-1.5M12 8v4l3 3"
    />
  </svg>
);
export default SvgHistory;
