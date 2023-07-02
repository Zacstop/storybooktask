import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 5a6 6 0 1 0 0 12m-1.604 1.828 2.53-1.44-1.44-2.53M14 4h6v6h-6V4Zm0 10h6v6h-6v-6Z"
    />
  </svg>
);
export default SvgMoveDown;
