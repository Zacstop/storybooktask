import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartRate1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.998 9a4.869 4.869 0 0 0-8.31-3.574L12 6.115l-.688-.689a4.869 4.869 0 0 0-6.886 6.886L12 19.885l1.893-1.893M9 12.667h2.667l2-2.667 2 5.333 2-2.666H21"
    />
  </svg>
);
export default SvgHeartRate1;
