import * as React from "react";
import type { SVGProps } from "react";
const SvgSuitcaseOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 4 17 17m-2-2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h2m7 0V6a2 2 0 0 0-2-2h-2c-.597 0-1.134.262-1.5.677M15 8h-3m3 0h3a2 2 0 0 1 2 2v5.563"
    />
  </svg>
);
export default SvgSuitcaseOff;
