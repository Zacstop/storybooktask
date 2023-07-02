import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckEmail = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7m-8 12H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5m-5 5.5 2 2 3.5-3.5"
    />
  </svg>
);
export default SvgCheckEmail;
