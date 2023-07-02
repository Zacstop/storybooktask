import * as React from "react";
import type { SVGProps } from "react";
const SvgPassword = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M14 6V5a2 2 0 1 0-4 0v1m2 11.5h.01m-4.51 0h.01m8.99 0h.01M9 11h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1ZM5 21h14a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgPassword;
