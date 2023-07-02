import * as React from "react";
import type { SVGProps } from "react";
const SvgLockFolder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.586a1 1 0 0 1 .707.293L12 7h7a2 2 0 0 1 2 2v1m-6 10h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Zm4-5v-1.5a1.5 1.5 0 0 0-3 0V15h3Z"
    />
  </svg>
);
export default SvgLockFolder;
