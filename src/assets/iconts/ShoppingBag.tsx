import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 10V6a3 3 0 1 0-6 0v4M8 21h8a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v9a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgShoppingBag;
