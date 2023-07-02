import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignToBottom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 20h14M12 4v12m0 0 3-3m-3 3-3-3"
    />
  </svg>
);
export default SvgAlignToBottom;
