import * as React from "react";
import type { SVGProps } from "react";
const SvgRupeeCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.333 17-4-3.857H12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H8h8m-6 2.572h6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgRupeeCoin;
