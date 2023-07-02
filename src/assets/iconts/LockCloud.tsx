import * as React from "react";
import type { SVGProps } from "react";
const SvgLockCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 18.914a4.287 4.287 0 0 1 0-8.4V10.5a5.5 5.5 0 1 1 10.978.5H17a4 4 0 0 1 1 7.874"
    />
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 16.429c0-.474.384-.858.857-.858h4.286c.473 0 .857.384.857.858v2.714a.857.857 0 0 1-.857.857H9.857A.857.857 0 0 1 9 19.143v-2.714Z"
    />
    <path
      stroke="#141C24"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.714 14.286a1.286 1.286 0 1 1 2.572 0v1.285h-2.572v-1.285Z"
    />
  </svg>
);
export default SvgLockCloud;
