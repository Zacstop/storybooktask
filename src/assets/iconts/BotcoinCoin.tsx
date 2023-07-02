import * as React from "react";
import type { SVGProps } from "react";
const SvgBotcoinCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 12h5.25M9 12v3.5h5.25a1.75 1.75 0 0 0 0-3.5M9 12V8.5h5.25a1.75 1.75 0 0 1 0 3.5M11 8V7m0 10v-1m3-8V7m0 10v-1m7-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgBotcoinCoin;
