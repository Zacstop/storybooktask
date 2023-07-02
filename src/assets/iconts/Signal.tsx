import * as React from "react";
import type { SVGProps } from "react";
const SvgSignal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 14v4m5-8v8m5-12v12"
    />
  </svg>
);
export default SvgSignal;
