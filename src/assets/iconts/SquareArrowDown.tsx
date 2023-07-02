import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8v8m0 0-3-3m3 3 3-3m-7.78 7h9.56c1.139 0 1.708 0 2.142-.225a2 2 0 0 0 .853-.853C20 18.488 20 17.919 20 16.78V7.22c0-1.139 0-1.708-.225-2.142a2 2 0 0 0-.853-.853C18.488 4 17.919 4 16.78 4H7.22c-1.139 0-1.708 0-2.142.225a2 2 0 0 0-.853.853C4 5.512 4 6.081 4 7.22v9.56c0 1.139 0 1.708.225 2.142a2 2 0 0 0 .853.853C5.512 20 6.081 20 7.22 20Z"
    />
  </svg>
);
export default SvgSquareArrowDown;
