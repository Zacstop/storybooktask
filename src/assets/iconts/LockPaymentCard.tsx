import * as React from "react";
import type { SVGProps } from "react";
const SvgLockPaymentCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 10.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7m-9-9h17.5M7 15h2m6.857 5h4.286a.857.857 0 0 0 .857-.857v-2.714a.857.857 0 0 0-.857-.858h-4.286a.857.857 0 0 0-.857.858v2.714c0 .473.384.857.857.857Zm3.429-4.429v-1.285a1.286 1.286 0 1 0-2.572 0v1.285h2.572Z"
    />
  </svg>
);
export default SvgLockPaymentCard;
