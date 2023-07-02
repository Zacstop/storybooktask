import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.412 2.427a1 1 0 0 1 1.176 0l8.335 6.056a1 1 0 0 1 .363 1.118l-3.184 9.798a1 1 0 0 1-.95.691H6.848a1 1 0 0 1-.951-.69L2.714 9.6a1 1 0 0 1 .363-1.117l8.335-6.056Z"
    />
  </svg>
);
export default SvgPentagon;
