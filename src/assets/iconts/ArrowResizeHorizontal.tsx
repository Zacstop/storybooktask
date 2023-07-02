import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowResizeHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16v-4m0-4v4m0 0H4m8 0h8M4 12l2.5 2.5M4 12l2.5-2.5M20 12l-2.5-2.5M20 12l-2.5 2.5"
    />
  </svg>
);
export default SvgArrowResizeHorizontal;
