import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.83 15.214a5 5 0 0 0 .236-6.125m2.828 8.696a9 9 0 0 0 .08-11.473M3 10v4a1 1 0 0 0 1 1h2.65a1 1 0 0 1 .624.22l3.101 2.48A1 1 0 0 0 12 16.92V7.08a1 1 0 0 0-1.625-.78L7.274 8.78a1 1 0 0 1-.625.22H4a1 1 0 0 0-1 1Z"
    />
  </svg>
);
export default SvgVolumeUp;
