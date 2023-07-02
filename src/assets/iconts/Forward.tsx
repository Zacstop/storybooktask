import * as React from "react";
import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.581 8.13 4.28 3.056a1 1 0 0 1 0 1.628l-4.28 3.056A1 1 0 0 1 12 15.057V8.943a1 1 0 0 1 1.581-.814ZM6.581 8.13l4.28 3.056a1 1 0 0 1 0 1.628L6.58 15.87A1 1 0 0 1 5 15.057V8.943a1 1 0 0 1 1.581-.814Z"
    />
  </svg>
);
export default SvgForward;
