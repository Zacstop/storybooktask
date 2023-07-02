import * as React from "react";
import type { SVGProps } from "react";
const SvgLayer = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 12 8 4 8-4M4 16l8 4 8-4M12 4 4 8l8 4 8-4-8-4Z"
    />
  </svg>
);
export default SvgLayer;
