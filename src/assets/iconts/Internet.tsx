import * as React from "react";
import type { SVGProps } from "react";
const SvgInternet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 15h16M4 9h16m1 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-5.4 0a12.56 12.56 0 0 1-3.6 8.818A12.559 12.559 0 0 1 8.4 12 12.56 12.56 0 0 1 12 3.182 12.56 12.56 0 0 1 15.6 12Z"
    />
  </svg>
);
export default SvgInternet;
