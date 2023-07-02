import * as React from "react";
import type { SVGProps } from "react";
const SvgSliders = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 20v-9M4 8h2m0 0h2M6 8V4m12 16v-6m-2-3h2m0 0h2m-2 0V4m-6 0v9m2 3h-2m0 0h-2m2 0v4"
    />
  </svg>
);
export default SvgSliders;
