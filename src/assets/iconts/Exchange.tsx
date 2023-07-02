import * as React from "react";
import type { SVGProps } from "react";
const SvgExchange = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 10h12l-4-4m0 8H4l4 4"
    />
  </svg>
);
export default SvgExchange;
