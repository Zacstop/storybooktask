import * as React from "react";
import type { SVGProps } from "react";
const SvgDownloadFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 3 19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h4m7-12.375v3.188M17.5 15v6m0 0L15 18.5m2.5 2.5 2.5-2.5"
    />
  </svg>
);
export default SvgDownloadFile;
