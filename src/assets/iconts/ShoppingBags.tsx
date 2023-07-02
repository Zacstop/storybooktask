import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBags = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 21H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.5M12 7V6a3 3 0 1 0-6 0v1m7 7v1a2 2 0 1 0 4 0v-1m-6 7h8a2 2 0 0 0 2-2v-7a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v7a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgShoppingBags;
