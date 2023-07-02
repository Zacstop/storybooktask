import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldBad = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10 9 2 2m0 0 2 2m-2-2 2-2m-2 2-2 2m1.725-9.921-6 1.714A1 1 0 0 0 5 5.754v5.1a10 10 0 0 0 4.188 8.137l2.23 1.594a1 1 0 0 0 1.163 0l2.231-1.594A10 10 0 0 0 19 10.854v-5.1a1 1 0 0 0-.725-.961l-6-1.714a1 1 0 0 0-.55 0Z"
    />
  </svg>
);
export default SvgShieldBad;
