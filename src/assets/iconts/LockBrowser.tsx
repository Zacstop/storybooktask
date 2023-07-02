import * as React from "react";
import type { SVGProps } from "react";
const SvgLockBrowser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 10v8a2 2 0 0 0 2 2h5M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 10h18m0 0v2M6 7h.01M9 7h.01m5.847 14h4.286a.857.857 0 0 0 .857-.857v-2.714a.857.857 0 0 0-.857-.858h-4.286a.857.857 0 0 0-.857.858v2.714c0 .473.384.857.857.857Zm3.429-4.429v-1.285a1.286 1.286 0 1 0-2.572 0v1.285h2.572Z"
    />
  </svg>
);
export default SvgLockBrowser;
