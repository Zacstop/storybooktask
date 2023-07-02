import * as React from "react";
import type { SVGProps } from "react";
const SvgUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <path
      fill="#D9D9D9"
      fillRule="evenodd"
      d="M41.143 0H30.857v29.829H0v10.285h30.857V72h10.286V40.114H72V29.83H41.143V0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnion;
