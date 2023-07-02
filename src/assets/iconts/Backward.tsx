import * as React from "react";
import type { SVGProps } from "react";
const SvgBackward = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.419 8.13-4.28 3.056a1 1 0 0 0 0 1.628l4.28 3.056A1 1 0 0 0 12 15.057V8.943a1 1 0 0 0-1.581-.814ZM17.419 8.13l-4.28 3.056a1 1 0 0 0 0 1.628l4.28 3.056A1 1 0 0 0 19 15.057V8.943a1 1 0 0 0-1.581-.814Z"
    />
  </svg>
);
export default SvgBackward;
