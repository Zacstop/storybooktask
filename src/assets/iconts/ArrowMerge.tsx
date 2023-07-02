import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMerge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7v5m0 0v5m0-5h7m0 0L7 9m3 3-3 3m14-8v5m0 0v5m0-5h-7m0 0 3-3m-3 3 3 3"
    />
  </svg>
);
export default SvgArrowMerge;
