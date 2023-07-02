import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignHorizontalCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 10v4m0-10v1m0 14v1M9 10h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Zm-2 9h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Z"
    />
  </svg>
);
export default SvgAlignHorizontalCenter;
