import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoveFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#F2F4F7" rx={12} />
    <path
      stroke="#97A1AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 12h10"
    />
  </svg>
);
export default SvgRemoveFill;
