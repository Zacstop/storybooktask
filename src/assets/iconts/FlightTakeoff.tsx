import * as React from "react";
import type { SVGProps } from "react";
const SvgFlightTakeoff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 19h16M11.422 5.347l-2.82 1.026 2.18 3.064-2.838 1.239-1.476-1.398-2.82 1.027 4.06 3.843 13.389-4.873a.252.252 0 0 0 .15-.323A3.521 3.521 0 0 0 16.53 6.93l-1.156.505-3.952-2.087Z"
    />
  </svg>
);
export default SvgFlightTakeoff;
