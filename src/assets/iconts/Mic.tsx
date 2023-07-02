import * as React from "react";
import type { SVGProps } from "react";
const SvgMic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17v4m0 0H9m3 0h3m2.738-8.246a6 6 0 0 1-11.411.2M12 13a2 2 0 0 1-2-2V5a2 2 0 1 1 4 0v6a2 2 0 0 1-2 2Z"
    />
  </svg>
);
export default SvgMic;
