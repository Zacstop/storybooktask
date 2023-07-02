import * as React from "react";
import type { SVGProps } from "react";
const SvgNote1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 14V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6.5m6.5-6-6.5 6m6.5-6h-4.5a2 2 0 0 0-2 2v4"
    />
  </svg>
);
export default SvgNote1;
