import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 5v15.5M9 4v14M3 5.72v13.662a1 1 0 0 0 1.447.894l3.659-1.829a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l4.553-2.277a1 1 0 0 0 .553-.894V4.387a1 1 0 0 0-1.316-.948l-4.052 1.35a2 2 0 0 1-1.264 0L9.631 3.211a2 2 0 0 0-1.264 0L3.684 4.772A1 1 0 0 0 3 5.721Z"
    />
  </svg>
);
export default SvgMap;
