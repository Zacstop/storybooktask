import * as React from "react";
import type { SVGProps } from "react";
const SvgDialPad = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgDialPad;
