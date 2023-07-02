import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartRate = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7.5V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1.5m18 9V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-1.5M3 12h4l3-4 3 8 3-4h5"
    />
  </svg>
);
export default SvgHeartRate;
