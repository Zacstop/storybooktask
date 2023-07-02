import * as React from "react";
import type { SVGProps } from "react";
const SvgLightSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5V3m0 18v-2m7-7h2M3 12h2m11.95 4.95L18 18M6 6l1.05 1.05m0 9.9L6 18M18 6l-1.05 1.05M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    />
  </svg>
);
export default SvgLightSun;
