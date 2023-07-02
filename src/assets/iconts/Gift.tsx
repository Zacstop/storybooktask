import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 12h16M4 12a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7m-8-5v14m0-14.129a.129.129 0 0 1-.129.129H6.76C5.788 7 5 6.206 5 5.234 5 4.004 5.997 3 7.227 3h.902A3.871 3.871 0 0 1 12 6.871Zm0 0c0 .071.058.129.129.129h5.111C18.212 7 19 6.206 19 5.234 19 4.004 18.003 3 16.773 3h-.902A3.871 3.871 0 0 0 12 6.871Z"
    />
  </svg>
);
export default SvgGift;
