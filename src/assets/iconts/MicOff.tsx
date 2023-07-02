import * as React from "react";
import type { SVGProps } from "react";
const SvgMicOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17v4m0-4h.105a6 6 0 0 0 3.506-1.208M12 17a6 6 0 0 1-5.673-4.047M12 21H9m3 0h3m-5-10.5v.5a2 2 0 0 0 2 2h1m-3-7.5V5a2 2 0 1 1 4 0v4.5m3.738 3.254c-.113.367-.26.721-.437 1.057M5 5l14 14"
    />
  </svg>
);
export default SvgMicOff;
