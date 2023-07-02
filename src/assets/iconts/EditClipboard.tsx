import * as React from "react";
import type { SVGProps } from "react";
const SvgEditClipboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2M9 5v2h6V5M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v2m-6.285 11.772 2.187-.438a1 1 0 0 0 .511-.273l6.074-6.074L19.5 12l-6.074 6.074a1 1 0 0 0-.273.511l-.438 2.187Z"
    />
  </svg>
);
export default SvgEditClipboard;
