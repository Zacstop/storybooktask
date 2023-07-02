import * as React from "react";
import type { SVGProps } from "react";
const SvgMyLocation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 12A6.75 6.75 0 0 1 12 18.75M18.75 12A6.75 6.75 0 0 0 12 5.25M18.75 12H21m-9 6.75A6.75 6.75 0 0 1 5.25 12M12 18.75V21m-6.75-9A6.75 6.75 0 0 1 12 5.25M5.25 12H3m9-6.75V3m2.25 9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);
export default SvgMyLocation;
