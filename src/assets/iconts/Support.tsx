import * as React from "react";
import type { SVGProps } from "react";
const SvgSupport = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18 6-3.172 3.172m0 0A3.987 3.987 0 0 0 12 8a3.987 3.987 0 0 0-2.828 1.172m5.656 0A3.987 3.987 0 0 1 16 12a3.987 3.987 0 0 1-1.172 2.828M18 18l-3.172-3.172m0 0A3.987 3.987 0 0 1 12 16a3.987 3.987 0 0 1-2.828-1.172M6 18l3.172-3.172m0 0A3.987 3.987 0 0 1 8 12c0-1.105.448-2.105 1.172-2.828M6 6l3.172 3.172M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgSupport;
