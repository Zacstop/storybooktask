import * as React from "react";
import type { SVGProps } from "react";
const SvgDeleteFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 3 19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h3m8-12.375v3.188M15 16l2.5 2.5m0 0L20 21m-2.5-2.5L20 16m-2.5 2.5L15 21"
    />
  </svg>
);
export default SvgDeleteFile;
