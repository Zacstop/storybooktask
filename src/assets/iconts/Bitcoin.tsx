import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 12V7h7.5a2.5 2.5 0 0 1 0 5M7 12v5h7.5a2.5 2.5 0 0 0 0-5M7 12h7.5M9 7V5m0 14v-2m4-10V5m0 14v-2"
    />
  </svg>
);
export default SvgBitcoin;
