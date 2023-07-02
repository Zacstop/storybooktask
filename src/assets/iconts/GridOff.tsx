import * as React from "react";
import type { SVGProps } from "react";
const SvgGridOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 9.333V6a2 2 0 0 0-2-2h-3.333M20 9.333v5.334m0-5.334h-5.333M4 9.333V4m0 5.333v5.334m0-5.334h4c.736 0 1.333.597 1.333 1.334v4m10.667 0V18a2 2 0 0 1-2 2h-3.333M20 14.667h-1.5m-14.5 0V18a2 2 0 0 0 2 2h3.333M4 14.667h5.333m0 5.333h5.334m-5.334 0v-5.333M9.333 4h5.334M9.333 4H8m1.333 0v1.5M14.667 4v5.333m0 10.667v-4c0-.736-.597-1.333-1.334-1.333h-4m5.334-5.334H13.5m1.167 0v1.264M3 3l18 18"
    />
  </svg>
);
export default SvgGridOff;
