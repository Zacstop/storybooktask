import * as React from "react";
import type { SVGProps } from "react";
const SvgDollarCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.5 9.083-.144-.12a2 2 0 0 0-1.28-.463H10.75a1.75 1.75 0 1 0 0 3.5h2.5a1.75 1.75 0 1 1 0 3.5h-2.838a2 2 0 0 1-1.394-.566L9 14.917M12 8V7m0 10v-1m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgDollarCoin;
