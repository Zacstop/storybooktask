import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignToRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 5v14M4 12h12m0 0-3-3m3 3-3 3"
    />
  </svg>
);
export default SvgAlignToRight;
