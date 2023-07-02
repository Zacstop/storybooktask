import * as React from "react";
import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9.5V12l1.5 1.5m2 3.5-.281 2.248A2 2 0 0 1 13.234 21h-2.468a2 2 0 0 1-1.985-1.752L8.5 17m0-10 .281-2.248A2 2 0 0 1 10.766 3h2.468a2 2 0 0 1 1.985 1.752L15.5 7m2.5 5a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
    />
  </svg>
);
export default SvgWatch;
