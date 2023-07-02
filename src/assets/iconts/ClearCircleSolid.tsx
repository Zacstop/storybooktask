import * as React from "react";
import type { SVGProps } from "react";
const SvgClearCircleSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="#141C24" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.667 8.667 12 12m0 0 3.333 3.333M12 12l3.333-3.333M12 12l-3.333 3.333"
    />
  </svg>
);
export default SvgClearCircleSolid;
