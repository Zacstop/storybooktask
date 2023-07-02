import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderTopLeft = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M4 20V5a1 1 0 0 1 1-1h15m-8 8h.01M12 8h.01M12 16h.01M12 20h.01M8 12h.01M8 20h.01M20 8h.01M20 16h.01M16 12h.01M16 20h.01M20 12h.01M20 20h.01"
    />
  </svg>
);
export default SvgBorderTopLeft;
