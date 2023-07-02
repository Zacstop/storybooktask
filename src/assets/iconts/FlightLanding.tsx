import * as React from "react";
import type { SVGProps } from "react";
const SvgFlightLanding = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 19h16M13.816 5.689l-2.82-1.026-.3 3.748-2.97-.875-.233-2.02L4.674 4.49l.64 5.554 13.389 4.873c.13.047.274-.02.322-.15a3.522 3.522 0 0 0-2.313-4.583l-1.21-.356-1.686-4.14Z"
    />
  </svg>
);
export default SvgFlightLanding;
