import * as React from "react";
import type { SVGProps } from "react";
const SvgAddPaymentCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8m5.5-4v2.5m0 0V20m0-2.5H16m2.5 0H21M3 10h17.5M7 15h2"
    />
  </svg>
);
export default SvgAddPaymentCard;
