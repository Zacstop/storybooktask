import * as React from "react";
import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a5 5 0 0 0-5 5v2.756c0 .848-.591 1.563-1.175 2.178A2.99 2.99 0 0 0 5 16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.8-.314-1.528-.825-2.066-.584-.614-1.175-1.33-1.175-2.178V9a5 5 0 0 0-5-5Zm0 0V3m1.798 16.877a2 2 0 0 1-3.62-.05"
    />
  </svg>
);
export default SvgBell;
