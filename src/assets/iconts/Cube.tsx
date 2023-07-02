import * as React from "react";
import type { SVGProps } from "react";
const SvgCube = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 12 8.387-4.842M12 12 3.61 7.15M12 12v9M3.34 8.155v7.69a2 2 0 0 0 1 1.732L11 21.423a2 2 0 0 0 2 0l6.66-3.846a2 2 0 0 0 1-1.732v-7.69a2 2 0 0 0-1-1.732L13 2.577a2 2 0 0 0-2 0L4.34 6.423a2 2 0 0 0-1 1.732Z"
    />
  </svg>
);
export default SvgCube;
