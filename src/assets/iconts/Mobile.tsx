import * as React from "react";
import type { SVGProps } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 17h2m-4 4h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgMobile;
