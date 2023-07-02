import * as React from "react";
import type { SVGProps } from "react";
const SvgAlbum = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7v11a3 3 0 0 1-3 3H7m-4-8.625 3.668-3.668a1 1 0 0 1 1.414 0l2.793 2.793m0 0 2.355-2.355a1 1 0 0 1 1.415 0L17 11.5m-6.125 0 1.969 1.969M6 17h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgAlbum;
