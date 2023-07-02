import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 5 14 14m-2.934-9.91a5 5 0 0 1 .747 4.266m2.162-7.044a9 9 0 0 1 .956 9.942M10.125 6.5l.625-.5a.77.77 0 0 1 1.25.6v1.9m0 3.5v4.92a1 1 0 0 1-1.625.78l-3.101-2.48a1 1 0 0 0-.625-.22H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.65a1 1 0 0 0 .624-.22l.82-.655"
    />
  </svg>
);
export default SvgVolumeOff;
