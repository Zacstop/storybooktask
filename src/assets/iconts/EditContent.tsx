import * as React from "react";
import type { SVGProps } from "react";
const SvgEditContent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 5h11M4 8h11M4 11h7m7.456 2.542-4.53 4.53a2 2 0 0 1-1.021.547l-2.09.418.418-2.09a2 2 0 0 1 .547-1.022l4.53-4.53m2.146 2.147 1.129-1.128a1 1 0 0 0 0-1.415l-.732-.732a1 1 0 0 0-1.415 0l-1.128 1.129m2.146 2.146-2.146-2.146"
    />
  </svg>
);
export default SvgEditContent;
