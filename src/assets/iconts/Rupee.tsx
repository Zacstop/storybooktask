import * as React from "react";
import type { SVGProps } from "react";
const SvgRupee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5h5a4 4 0 0 1 0 8H9l6 6M6 5h12M8 9h10"
    />
  </svg>
);
export default SvgRupee;
