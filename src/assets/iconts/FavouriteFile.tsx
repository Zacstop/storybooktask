import * as React from "react";
import type { SVGProps } from "react";
const SvgFavouriteFile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.5 3 19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h3m8-12.375v3.188m-5.586 5.844a2 2 0 0 1 2.829-2.829 2 2 0 0 1 2.828 2.829l-2.828 2.828-2.829-2.828Z"
    />
  </svg>
);
export default SvgFavouriteFile;
