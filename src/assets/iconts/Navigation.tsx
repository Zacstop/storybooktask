import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.47 17.06 5.741-11.482c.737-1.474 2.84-1.474 3.578 0l5.74 11.481c.837 1.673-.876 3.477-2.59 2.727L12.401 17.8a1 1 0 0 0-.802 0l-4.538 1.986c-1.714.75-3.427-1.054-2.59-2.727Z"
    />
  </svg>
);
export default SvgNavigation;
