import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 3.5 19 19M5 5v5.854a10 10 0 0 0 4.188 8.137l2.23 1.594a1 1 0 0 0 1.163 0l4.53-3.235M7.624 4.25l4.1-1.171a1 1 0 0 1 .55 0l6 1.714a1 1 0 0 1 .725.961V15"
    />
  </svg>
);
export default SvgShieldOff;
