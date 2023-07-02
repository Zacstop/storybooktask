import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 9.333V6a2 2 0 0 0-2-2h-3.333M20 9.333h-5.333m5.333 0v5.334M4 9.333V6a2 2 0 0 1 2-2h3.333M4 9.333h5.333M4 9.333v5.334m10.667-5.334H9.333m5.334 0V4m0 5.333v5.334M9.333 9.333V4m0 5.333v5.334m10.667 0V18a2 2 0 0 1-2 2h-3.333M20 14.667h-5.333M4 14.667V18a2 2 0 0 0 2 2h3.333M4 14.667h5.333m5.334 0H9.333m5.334 0V20m-5.334-5.333V20m0-16h5.334M9.333 20h5.334"
    />
  </svg>
);
export default SvgGrid;
