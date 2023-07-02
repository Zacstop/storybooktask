import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 4 3 3m-3-3-3 3m3-3v9a4 4 0 0 1-4 4H4m0 0 3 3m-3-3 3-3"
    />
  </svg>
);
export default SvgArrowLeftUp;
