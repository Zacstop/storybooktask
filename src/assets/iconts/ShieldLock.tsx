import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 21-2.812-2.009A10 10 0 0 1 3 10.854v-5.1a1 1 0 0 1 .725-.961l6-1.714a1 1 0 0 1 .55 0l6 1.714a1 1 0 0 1 .725.961V7.5m2 7.5v-2a2 2 0 0 0-4 0v2m4 0h-4m4 0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgShieldLock;
