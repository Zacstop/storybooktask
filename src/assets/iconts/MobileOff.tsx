import * as React from "react";
import type { SVGProps } from "react";
const SvgMobileOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 3H15a3 3 0 0 1 3 3v8.25M11 17h2M6 6.25V18a3 3 0 0 0 3 3h6.75A2.25 2.25 0 0 0 18 18.75v-.563M3 3l18 18"
    />
  </svg>
);
export default SvgMobileOff;
