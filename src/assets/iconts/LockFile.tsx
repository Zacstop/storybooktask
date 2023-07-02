import * as React from "react";
import type { SVGProps } from "react";
const SvgLockFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 3 19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2m9-12.375v3.188M14 21h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm4-4v-1.5a1.5 1.5 0 0 0-3 0V17h3Z"
    />
  </svg>
);
export default SvgLockFile;
