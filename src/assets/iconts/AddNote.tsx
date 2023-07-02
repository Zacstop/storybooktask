import * as React from "react";
import type { SVGProps } from "react";
const SvgAddNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 14V7a3 3 0 0 0-3-3h-5m8 10-6.5 6m6.5-6h-4.5a2 2 0 0 0-2 2v4m0 0H7a3 3 0 0 1-3-3v-5m3-8v3m0 0v3m0-3H4m3 0h3"
    />
  </svg>
);
export default SvgAddNote;
