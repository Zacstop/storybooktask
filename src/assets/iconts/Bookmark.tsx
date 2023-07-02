import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C8.52 4 9.08 4 10.2 4h3.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C17 5.52 17 6.08 17 7.2V20l-2.874-2.555c-.752-.668-1.128-1.003-1.553-1.13a2 2 0 0 0-1.146 0c-.425.127-.8.462-1.553 1.13L7 20V7.2Z"
    />
  </svg>
);
export default SvgBookmark;
