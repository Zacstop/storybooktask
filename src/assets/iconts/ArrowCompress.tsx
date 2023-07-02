import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCompress = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 5 5 5m0 0V5m0 5H5m14 9-5-5m0 0v5m0-5h5"
    />
  </svg>
);
export default SvgArrowCompress;
