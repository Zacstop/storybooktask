import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 10.5c0 .168-.008.335-.022.5H17a4 4 0 0 1 0 8H6.857A4.286 4.286 0 0 1 6 10.514V10.5a5.5 5.5 0 0 1 11 0Z"
    />
  </svg>
);
export default SvgCloud;
