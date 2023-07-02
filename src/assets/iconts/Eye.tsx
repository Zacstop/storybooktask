import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.665 12.593a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 12 5c4.256 0 7.892 2.66 9.335 6.407a1.65 1.65 0 0 1 0 1.186A10.004 10.004 0 0 1 12 19c-4.256 0-7.892-2.66-9.335-6.407Z"
    />
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgEye;
