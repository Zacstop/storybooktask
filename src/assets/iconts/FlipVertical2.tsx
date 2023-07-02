import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipVertical2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5v2m0 4v2m0 4v2m3-7 5-5v10l-5-5Zm-6 0L4 7v10l5-5Z"
    />
  </svg>
);
export default SvgFlipVertical2;
