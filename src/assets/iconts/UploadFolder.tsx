import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadFolder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5 20v-6m0 0 2.5 2.5M18.5 14 16 16.5M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.586a1 1 0 0 1 .707.293L12 7h7a2 2 0 0 1 2 2v2"
    />
  </svg>
);
export default SvgUploadFolder;
