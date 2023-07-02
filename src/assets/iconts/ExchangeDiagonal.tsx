import * as React from "react";
import type { SVGProps } from "react";
const SvgExchangeDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7.757 13.414 8.486-8.485h-5.657m5.657 5.657L7.757 19.07h5.657"
    />
  </svg>
);
export default SvgExchangeDiagonal;
