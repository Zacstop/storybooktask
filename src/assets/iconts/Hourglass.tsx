import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12a5 5 0 0 1-5-5V3h10v4a5 5 0 0 1-5 5Zm0 0a5 5 0 0 1 5 5v4H7v-4a5 5 0 0 1 5-5Zm-6 9h12M6 3h12"
    />
  </svg>
);
export default SvgHourglass;
