import * as React from "react";
import type { SVGProps } from "react";
const SvgSanitizer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 15h2m0 0h2m-2 0v-2m0 2v2m0-10V4m-2 0h4.172a2 2 0 0 1 1.414.586L17 6M9 20h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm1-13h4v3h-4V7Z"
    />
  </svg>
);
export default SvgSanitizer;
