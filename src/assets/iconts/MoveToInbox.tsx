import * as React from "react";
import type { SVGProps } from "react";
const SvgMoveToInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5m-2.5-9v6m0 0L15 6.5M17.5 9 20 6.5M4 14h5m6 0h5m-5.18.026a3 3 0 0 1-5.646-.02"
    />
  </svg>
);
export default SvgMoveToInbox;
