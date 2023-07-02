import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChart4 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 10v9m4-12v12m-8-5v5M4 5v14a1 1 0 0 0 1 1h14"
    />
  </svg>
);
export default SvgBarChart4;
