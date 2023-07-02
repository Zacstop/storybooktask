import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 4 16 16M12 9a3 3 0 0 1 3 3M9.718 5.262a10.004 10.004 0 0 1 11.617 6.145 1.65 1.65 0 0 1 0 1.186 9.988 9.988 0 0 1-1.56 2.697M9.857 9.9a3 3 0 0 0 4.22 4.263m3.33 3.25A9.954 9.954 0 0 1 12 19c-4.256 0-7.892-2.66-9.335-6.407a1.651 1.651 0 0 1 0-1.186A10.034 10.034 0 0 1 6.588 6.59"
    />
  </svg>
);
export default SvgEyeOff;
