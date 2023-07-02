import * as React from "react";
import type { SVGProps } from "react";
const SvgPushPin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 15H6c0-1.326.632-2.598 1.757-3.536a6.02 6.02 0 0 1 1.294-.818L10 4h4l.95 6.646c.469.22.905.495 1.293.818C17.368 12.402 18 13.674 18 15h-6Zm0 0v5M8 4h8"
    />
  </svg>
);
export default SvgPushPin;
