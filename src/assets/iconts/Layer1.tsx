import * as React from "react";
import type { SVGProps } from "react";
const SvgLayer1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 14 8 5 8-5m-8-9 8 5-8 5-8-5 8-5Z"
    />
  </svg>
);
export default SvgLayer1;
