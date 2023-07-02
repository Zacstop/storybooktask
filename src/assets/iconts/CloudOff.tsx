import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 4 16 16M6.994 7.344a5.475 5.475 0 0 0-.995 3.156v.014A4.287 4.287 0 0 0 6.856 19h10.143c.473 0 .927-.082 1.348-.233m2.231-1.98A4 4 0 0 0 16.998 11h-.022a5.5 5.5 0 0 0-7.93-5.425"
    />
  </svg>
);
export default SvgCloudOff;
