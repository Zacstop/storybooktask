import * as React from "react";
import type { SVGProps } from "react";
const SvgBrokenHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 6-2 4 4 1-2 3m-7.574-1.688a4.869 4.869 0 0 1 6.886-6.886l.688.689.688-.689a4.869 4.869 0 0 1 6.886 6.886L12 19.885l-7.574-7.574Z"
    />
  </svg>
);
export default SvgBrokenHeart;
