import * as React from "react";
import type { SVGProps } from "react";
const SvgCommentSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#141C24"
      fillRule="evenodd"
      d="M6 4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h.397a.2.2 0 0 1 .163.084l1.986 2.78a.5.5 0 0 0 .841-.042l1.555-2.721a.2.2 0 0 1 .174-.101H18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6Zm6.25 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.5 10.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM17 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCommentSolid;
