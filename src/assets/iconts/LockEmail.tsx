import * as React from "react";
import type { SVGProps } from "react";
const SvgLockEmail = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7m-8 12H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5m-5.143 8h4.286a.857.857 0 0 0 .857-.857v-1.714a.857.857 0 0 0-.857-.858h-4.286a.857.857 0 0 0-.857.858v1.714c0 .473.384.857.857.857Zm3.429-3.429v-1.285a1.286 1.286 0 1 0-2.572 0v1.285h2.572Z"
    />
  </svg>
);
export default SvgLockEmail;
