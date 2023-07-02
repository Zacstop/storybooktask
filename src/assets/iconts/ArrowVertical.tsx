import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4v16m0-16 3.5 3.5M12 4 8.5 7.5M12 20l-3.5-3.5M12 20l3.5-3.5"
    />
  </svg>
);
export default SvgArrowVertical;
