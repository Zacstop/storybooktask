import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsVerticalExpand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 21H7M17 3H7m5 4v10m0-10 2.5 2.5M12 7 9.5 9.5M12 17l2.5-2.5M12 17l-2.5-2.5"
    />
  </svg>
);
export default SvgArrowsVerticalExpand;
