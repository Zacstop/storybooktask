import * as React from "react";
import type { SVGProps } from "react";
const SvgLink2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.757 10.586 4.93 13.414a3 3 0 0 0 0 4.243l1.414 1.414a3 3 0 0 0 4.243 0l2.828-2.828M9.88 14.12 14.12 9.88m-3.535-2.122 2.828-2.828a3 3 0 0 1 4.243 0l1.414 1.414a3 3 0 0 1 0 4.243l-2.828 2.828"
    />
  </svg>
);
export default SvgLink2;
