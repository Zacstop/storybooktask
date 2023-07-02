import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 3 19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h4m7-12.375v3.188M17.5 21v-6m0 0 2.5 2.5M17.5 15 15 17.5"
    />
  </svg>
);
export default SvgUploadFile;
