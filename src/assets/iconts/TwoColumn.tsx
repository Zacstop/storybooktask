import * as React from "react";
import type { SVGProps } from "react";
const SvgTwoColumn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6m0-16h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6m0-16v16"
    />
  </svg>
);
export default SvgTwoColumn;
