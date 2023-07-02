import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 14h14v2L5 21v-7ZM5 10h14V8L5 3v7Z"
    />
  </svg>
);
export default SvgFlipHorizontal;
