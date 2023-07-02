import * as React from "react";
import type { SVGProps } from "react";
const SvgRemoveFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 3 19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2m9-12.375v2.188m-4.975 4.212a3.5 3.5 0 1 0 4.95 4.95m-4.95-4.95a3.5 3.5 0 1 1 4.95 4.95m-4.95-4.95 4.95 4.95"
    />
  </svg>
);
export default SvgRemoveFile;
