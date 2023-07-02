import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6h20M2 6v12M2 6v4a4 4 0 0 0 4-4H2Zm20 0v12m0-12h-4a4 4 0 0 0 4 4V6Zm0 12H2m20 0v-4a4 4 0 0 0-4 4h4ZM2 18h4a4 4 0 0 0-4-4v4Zm12-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgMoney;
