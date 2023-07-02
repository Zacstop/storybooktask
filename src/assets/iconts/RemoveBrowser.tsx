import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoveBrowser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 10v8a2 2 0 0 0 2 2h7M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 10h18m0 0v2m-5.121 2.879a3 3 0 1 0 4.243 4.243m-4.243-4.243a3 3 0 1 1 4.243 4.243m-4.243-4.243 4.242 4.242M6 7h.01M9 7h.01"
    />
  </svg>
);
export default SvgRemoveBrowser;
