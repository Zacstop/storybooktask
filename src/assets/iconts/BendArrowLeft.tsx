import * as React from "react";
import type { SVGProps } from "react";
const SvgBendArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 18v-4a4 4 0 0 0-4-4H5m0 0 4-4m-4 4 4 4"
    />
  </svg>
);
export default SvgBendArrowLeft;
