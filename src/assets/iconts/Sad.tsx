import * as React from "react";
import type { SVGProps } from "react";
const SvgSad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#141C24"
      strokeLinecap="round"
      strokeWidth={1.5}
      clipPath="url(#Sad_svg__a)"
    >
      <circle cx={12} cy={12} r={9} strokeLinejoin="round" />
      <path d="M9.5 9.5h.01M14.5 9.5h.01" />
      <path strokeLinejoin="round" d="M7.538 15.606a7 7 0 0 1 8.924 0" />
    </g>
    <defs>
      <clipPath id="Sad_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSad;
