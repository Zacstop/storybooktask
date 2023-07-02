import * as React from "react";
import type { SVGProps } from "react";
const SvgRemovePaymentCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 11.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7m3.879-4.121a3 3 0 1 0 4.243 4.243m-4.243-4.243a3 3 0 1 1 4.243 4.243m-4.243-4.243 4.242 4.242M3 10h17.5M7 15h2"
    />
  </svg>
);
export default SvgRemovePaymentCard;
