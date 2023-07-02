import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 3h1.404a2 2 0 0 1 1.95 1.557L6.909 7M8.5 14h7.886a3 3 0 0 0 2.825-1.991l1.312-3.673A1 1 0 0 0 19.58 7H6.909M8.5 14 6.91 7m1.59 7 .586 2.05a2 2 0 0 0 1.923 1.45H18M11 20h.01M17 20h.01"
    />
  </svg>
);
export default SvgShoppingCart;
