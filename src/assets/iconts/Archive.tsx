import * as React from "react";
import type { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 8h16M4 8v10a2 2 0 0 0 2 2h1M4 8l2-4h12l2 4m0 0v10a2 2 0 0 1-2 2h-1m-5-6v6m0 0 2.5-2.5M12 20l-2.5-2.5"
    />
  </svg>
);
export default SvgArchive;
