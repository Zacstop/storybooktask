import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 4 16 16M10 7h3a2 2 0 0 1 2 2v2.5M5.75 7A1.75 1.75 0 0 0 4 8.75V15a2 2 0 0 0 2 2h8.293c.453 0 .887-.18 1.207-.5m-.125-5.8 3-2.4A1 1 0 0 1 20 9.08v5.84a1 1 0 0 1-1.625.78l-3-2.4a1 1 0 0 1-.375-.78v-1.04a1 1 0 0 1 .375-.78Z"
    />
  </svg>
);
export default SvgVideoOff;
