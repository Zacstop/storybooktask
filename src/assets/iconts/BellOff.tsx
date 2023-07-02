import * as React from "react";
import type { SVGProps } from "react";
const SvgBellOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a5 5 0 0 1 5 5v3.5M12 4c-.982 0-1.898.283-2.67.772M12 4V3m4 14H6a1 1 0 0 1-1-1c0-.8.314-1.528.825-2.066C6.409 13.32 7 12.604 7 11.756V9c0-.606.108-1.186.305-1.723M3 3l18 18m-7.202-1.123a2 2 0 0 1-3.62-.05"
    />
  </svg>
);
export default SvgBellOff;
