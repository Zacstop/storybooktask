import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 17h3v-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7h3m12-6h-2m1-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h10ZM7 14h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4Z"
    />
  </svg>
);
export default SvgPrinter;
