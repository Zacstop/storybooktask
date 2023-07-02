import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeDesktop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m-5-8-2 2 2 2m4-4 2 2-2 2m-7 8v4m-4 0h8"
    />
  </svg>
);
export default SvgCodeDesktop;
