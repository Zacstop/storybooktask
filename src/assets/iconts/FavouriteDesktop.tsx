import * as React from "react";
import type { SVGProps } from "react";
const SvgFavouriteDesktop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1m-8 3v4m-4 0h8m-.485-13A1.757 1.757 0 1 1 18 4.515 1.757 1.757 0 0 1 20.485 7L18 9.485 15.515 7Z"
    />
  </svg>
);
export default SvgFavouriteDesktop;
