import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141C24"
      strokeWidth={1.5}
      d="M3 10a1 1 0 0 1 1-1h3v12H4a1 1 0 0 1-1-1V10ZM9.244 20.496 7 19v-8h.891a1 1 0 0 0 .889-.54l2.932-5.67c.783-1.513 3.083-.756 2.813.926l-.34 2.126A1 1 0 0 0 15.173 9h3.367a2 2 0 0 1 1.958 2.408l-1.5 7.204A3 3 0 0 1 16.06 21h-5.153a3 3 0 0 1-1.664-.504Z"
    />
  </svg>
);
export default SvgThumbsUp;
