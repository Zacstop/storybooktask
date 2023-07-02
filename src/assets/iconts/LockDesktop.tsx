import * as React from "react";
import type { SVGProps } from "react";
const SvgLockDesktop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1m-8 3v4m-4 0h8m-1.143-10h4.286A.857.857 0 0 0 20 9.143V6.429a.857.857 0 0 0-.857-.858h-4.286A.857.857 0 0 0 14 6.43v2.714c0 .473.384.857.857.857Zm3.429-4.429V4.286a1.286 1.286 0 1 0-2.572 0V5.57h2.572Z"
    />
  </svg>
);
export default SvgLockDesktop;
