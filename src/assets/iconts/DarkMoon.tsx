import * as React from "react";
import type { SVGProps } from "react";
const SvgDarkMoon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 17.58c-.18.013-.36.02-.542.02-4.28 0-7.749-3.583-7.749-8.002 0-2.18.844-4.155 2.212-5.598C7.525 4.122 4 7.656 4 11.998 4 16.418 7.652 20 12.156 20A8.209 8.209 0 0 0 18 17.58Z"
    />
  </svg>
);
export default SvgDarkMoon;
