import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignToCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 12H5m7 8v-5m0 0 2 2m-2-2-2 2m2-13v5m0 0-2-2m2 2 2-2"
    />
  </svg>
);
export default SvgAlignToCenter;
