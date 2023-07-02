import * as React from "react";
import type { SVGProps } from "react";
const SvgTrendingUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 17 5.293-5.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0L21 7m0 0h-5m5 0v5"
    />
  </svg>
);
export default SvgTrendingUp;
