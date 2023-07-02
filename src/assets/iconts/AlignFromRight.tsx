import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignFromRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 5v14m-4-7H4m0 0 3 3m-3-3 3-3"
    />
  </svg>
);
export default SvgAlignFromRight;
