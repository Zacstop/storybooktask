import * as React from "react";
import type { SVGProps } from "react";
const SvgShuffleArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 8h2.891a2 2 0 0 1 1.697.94l3.825 6.12a2 2 0 0 0 1.695.94H20m0 0-2.5-2.5M20 16l-2.5 2.5M14 8h6m0 0-2.5 2.5M20 8l-2.5-2.5M4 16h4"
    />
  </svg>
);
export default SvgShuffleArrow;
