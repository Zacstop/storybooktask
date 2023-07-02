import * as React from "react";
import type { SVGProps } from "react";
const SvgBackspace = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 10-2 2m0 0-2 2m2-2-2-2m2 2 2 2M3.533 11.36l4.167-5A1 1 0 0 1 8.468 6H18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8.468a1 1 0 0 1-.768-.36l-4.167-5a1 1 0 0 1 0-1.28Z"
    />
  </svg>
);
export default SvgBackspace;
