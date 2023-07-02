import * as React from "react";
import type { SVGProps } from "react";
const SvgSyringe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.243 7.757a2 2 0 0 1 0 2.829l-7.071 7.07-2.829-2.828 7.071-7.07a2 2 0 0 1 2.829 0Zm0 0 2.12-2.12M4.93 13.413l5.657 5.657M9.172 12 12 14.828m-4.243 1.415-2.12 2.12m1.413 1.415L4.222 16.95"
    />
  </svg>
);
export default SvgSyringe;
