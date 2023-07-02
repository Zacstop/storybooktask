import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpQuestion = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M10 9a2 2 0 1 1 2 2v1m0 3h.01m2.24 4-1.45 1.933a1 1 0 0 1-1.6 0L9.75 19H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-2.75Z"
    />
  </svg>
);
export default SvgHelpQuestion;
