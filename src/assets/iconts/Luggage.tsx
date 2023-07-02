import * as React from "react";
import type { SVGProps } from "react";
const SvgLuggage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 20h8m-8 0a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2m-8 0v1m8-1v1m-6-10v5m4-5v5m0-9V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3h4Z"
    />
  </svg>
);
export default SvgLuggage;
