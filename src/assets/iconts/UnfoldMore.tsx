import * as React from "react";
import type { SVGProps } from "react";
const SvgUnfoldMore = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 15-4.293 4.293a1 1 0 0 1-1.414 0L7 15m0-6 4.293-4.293a1 1 0 0 1 1.414 0L17 9"
    />
  </svg>
);
export default SvgUnfoldMore;
