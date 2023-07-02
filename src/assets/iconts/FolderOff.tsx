import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 3 18 18M9 5h.586a1 1 0 0 1 .707.293L12 7h7a2 2 0 0 1 2 2v8.5M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgFolderOff;
