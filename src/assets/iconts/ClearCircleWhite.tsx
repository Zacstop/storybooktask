import * as React from "react";
import type { SVGProps } from "react";
const SvgClearCircleWhite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.667 8.667 12 12m0 0 3.333 3.333M12 12l3.333-3.333M12 12l-3.333 3.333M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
);
export default SvgClearCircleWhite;
