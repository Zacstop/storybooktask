import * as React from "react";
import type { SVGProps } from "react";
const SvgChargingBattery = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h.75m9.5 8H16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.75M21 11v2M10 8l-2 4h5l-2 4"
    />
  </svg>
);
export default SvgChargingBattery;
