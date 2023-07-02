import * as React from "react";
import type { SVGProps } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141C24"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 5v14h7.16a3.84 3.84 0 1 0-.192-7.674l-3.468.174 2.774-.133A3.186 3.186 0 0 0 13.122 5H7Z"
    />
  </svg>
);
export default SvgBold;
