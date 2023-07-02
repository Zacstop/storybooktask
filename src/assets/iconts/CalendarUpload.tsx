import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 5H6a2 2 0 0 0-2 2v3m4-5h8M8 5V3m0 2v2m8-2h2a2 2 0 0 1 2 2v3m-4-5V3m0 2v2m4 3H4m16 0v1.75M4 10v9a2 2 0 0 0 2 2h6m6 0v-6m0 0 2.5 2.5M18 15l-2.5 2.5"
    />
  </svg>
);
export default SvgCalendarUpload;
