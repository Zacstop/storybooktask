import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.379 8.45-9.415 9.415a2 2 0 0 1-1.022.547L5 19l.588-2.942a2 2 0 0 1 .547-1.022l9.415-9.415M18.38 8.45l1.414-1.414a1 1 0 0 0 0-1.415l-1.414-1.414a1 1 0 0 0-1.415 0L15.55 5.621M18.38 8.45 15.55 5.62"
    />
  </svg>
);
export default SvgEdit;
