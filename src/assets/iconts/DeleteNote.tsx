import * as React from "react";
import type { SVGProps } from "react";
const SvgDeleteNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 14V7a3 3 0 0 0-3-3h-5m8 10-6.5 6m6.5-6h-4.5a2 2 0 0 0-2 2v4m0 0H7a3 3 0 0 1-3-3v-5m0-8 2.5 2.5m0 0L9 9M6.5 6.5 9 4M6.5 6.5 4 9"
    />
  </svg>
);
export default SvgDeleteNote;
