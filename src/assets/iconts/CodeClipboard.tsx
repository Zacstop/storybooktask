import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeClipboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 5v2H9V5m6 0a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2m6 0h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m1 7-2 2 2 2m4-4 2 2-2 2"
    />
  </svg>
);
export default SvgCodeClipboard;
