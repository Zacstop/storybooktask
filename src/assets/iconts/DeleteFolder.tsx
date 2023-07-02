import * as React from "react";
import type { SVGProps } from "react";
const SvgDeleteFolder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.586a1 1 0 0 1 .707.293L12 7h7a2 2 0 0 1 2 2v2m-5 4 2.5 2.5m0 0L21 20m-2.5-2.5L21 15m-2.5 2.5L16 20"
    />
  </svg>
);
export default SvgDeleteFolder;
