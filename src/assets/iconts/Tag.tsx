import * as React from "react";
import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 7.5h.01M5 3h6.172a2 2 0 0 1 1.414.586l7.293 7.293a3 3 0 0 1 0 4.242L15.12 19.88a3 3 0 0 1-4.242 0l-7.293-7.293A2 2 0 0 1 3 11.172V5a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgTag;
