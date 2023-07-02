import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadset = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 13h.75c.69 0 1.25.56 1.25 1.25v3.5C8 18.44 7.44 19 6.75 19H6a3 3 0 1 1 0-6Zm0 0v-2a6 6 0 1 1 12 0v2m0 0h-.75c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25H18a3 3 0 1 0 0-6Z"
    />
  </svg>
);
export default SvgHeadset;
