import * as React from "react";
import type { SVGProps } from "react";
const SvgUserCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.97 19.505A4 4 0 0 0 13 16h-2a4 4 0 0 0-3.97 3.505m9.94 0a9 9 0 1 0-9.94 0m9.94 0A8.958 8.958 0 0 1 12 21a8.958 8.958 0 0 1-4.97-1.495M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgUserCircle;
