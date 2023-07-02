import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoPlaylist = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#141C24" d="M9 12V8l3.143 2L9 12Z" />
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 7v11a3 3 0 0 1-3 3H7m-1-4h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Zm3-5V8l3.143 2L9 12Z"
    />
  </svg>
);
export default SvgVideoPlaylist;
