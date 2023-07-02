import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 7.5H9.5V11h5v3.5l-2.129.851a1 1 0 0 1-.742 0L9.5 14.5m2.926 5.3 5.091-2.396a1 1 0 0 0 .563-.755L19.825 5.15A1 1 0 0 0 18.837 4H5.163a1 1 0 0 0-.988 1.15L5.92 16.65a1 1 0 0 0 .563.755l5.091 2.396a1 1 0 0 0 .852 0Z"
    />
  </svg>
);
export default SvgHtml;
