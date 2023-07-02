import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 16H10a2 2 0 0 1-2-2V4m2.5 4H14a2 2 0 0 1 2 2v3.5M4 8h1.5M16 18.5V20"
    />
  </svg>
);
export default SvgCrop;
