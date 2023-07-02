import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowResizeVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 12h4m4 0h-4m0 0V4m0 8v8m0-16L9.5 6.5M12 4l2.5 2.5M12 20l2.5-2.5M12 20l-2.5-2.5"
    />
  </svg>
);
export default SvgArrowResizeVertical;
