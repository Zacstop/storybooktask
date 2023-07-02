import * as React from "react";
import type { SVGProps } from "react";
const SvgAddDesktop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m-2-9v3m0 0v3m0-3h-3m3 0h3m-9 10v4m-4 0h8"
    />
  </svg>
);
export default SvgAddDesktop;
