import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20 17-3 3m3-3-3-3m3 3h-9a4 4 0 0 1-4-4V4m0 0L4 7m3-3 3 3"
    />
  </svg>
);
export default SvgArrowRightUp;
