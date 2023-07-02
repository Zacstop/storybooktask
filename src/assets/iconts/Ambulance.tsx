import * as React from "react";
import type { SVGProps } from "react";
const SvgAmbulance = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 17h2V7a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v10h7m-3-6h2m0 0h2m-2 0V9m0 2v2M9 9H6.414a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 0-.293.707V17h2m14 .5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);
export default SvgAmbulance;
