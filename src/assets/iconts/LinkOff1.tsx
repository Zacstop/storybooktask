import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkOff1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m5 5 14 14m-9-3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h2m1 4h3m2-4h4a3 3 0 0 1 3 3v3.5a1.5 1.5 0 0 1-1.5 1.5M14 16h2"
    />
  </svg>
);
export default SvgLinkOff1;
