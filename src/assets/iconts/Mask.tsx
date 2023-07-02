import * as React from "react";
import type { SVGProps } from "react";
const SvgMask = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 15-1.842-1.228A2.6 2.6 0 0 1 3 11.608v-.446A2.28 2.28 0 0 1 6 9m12 6 1.842-1.228A2.6 2.6 0 0 0 21 11.608v-.446A2.28 2.28 0 0 0 18 9m-9 3 2.367-.79a2 2 0 0 1 1.265 0L15 12m-5 3 1.515-.379a2 2 0 0 1 .97 0L14 15m-8-4.764v4.375a4 4 0 0 0 3.342 3.946l2 .333c.436.073.88.073 1.316 0l2-.333A4 4 0 0 0 18 14.612v-4.376a2 2 0 0 0-1.106-1.789l-4-2a2 2 0 0 0-1.788 0l-4 2A2 2 0 0 0 6 10.237Z"
    />
  </svg>
);
export default SvgMask;
