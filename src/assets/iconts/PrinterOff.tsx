import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinterOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 17v-7a2 2 0 0 0-2-2h-2M6 17H3v-7a2 2 0 0 1 2-2h2.5M17 8V6a2 2 0 0 0-2-2H9c-.451 0-.868.15-1.202.401M17 8h-5.5m6.5 3h-2m-2 3H7v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1M3 3l18 18"
    />
  </svg>
);
export default SvgPrinterOff;
