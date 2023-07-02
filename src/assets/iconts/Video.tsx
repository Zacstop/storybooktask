import * as React from "react";
import type { SVGProps } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 15V9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM18.375 8.3l-3 2.4a1 1 0 0 0-.375.78v1.04a1 1 0 0 0 .375.78l3 2.4A1 1 0 0 0 20 14.92V9.08a1 1 0 0 0-1.625-.78Z"
    />
  </svg>
);
export default SvgVideo;
