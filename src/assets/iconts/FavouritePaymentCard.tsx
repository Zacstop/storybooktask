import * as React from "react";
import type { SVGProps } from "react";
const SvgFavouritePaymentCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 11.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8M3 10h17.5M7 15h2m6.515 2A1.757 1.757 0 1 1 18 14.515 1.757 1.757 0 0 1 20.485 17L18 19.485 15.515 17Z"
    />
  </svg>
);
export default SvgFavouritePaymentCard;
