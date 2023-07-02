import * as React from "react";
import type { SVGProps } from "react";
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141C24"
      strokeWidth={1.5}
      d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-6.884a.2.2 0 0 0-.174.1l-1.555 2.722a.5.5 0 0 1-.84.043L6.56 17.084A.2.2 0 0 0 6.397 17H6a3 3 0 0 1-3-3V7Z"
    />
  </svg>
);
export default SvgComment;
