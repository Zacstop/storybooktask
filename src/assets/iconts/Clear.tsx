import * as React from "react";
import type { SVGProps } from "react";
const SvgClear = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 8 8 8m0-8-8 8"
    />
  </svg>
);
export default SvgClear;
