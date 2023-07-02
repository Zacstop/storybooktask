import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.826 5H6.174a1 1 0 0 0-.759 1.65l4.344 5.07a1 1 0 0 1 .241.65v5.012a1 1 0 0 0 .553.894l2 1A1 1 0 0 0 14 18.382V12.37a1 1 0 0 1 .24-.65l4.345-5.07a1 1 0 0 0-.76-1.65Z"
    />
  </svg>
);
export default SvgFilter1;
