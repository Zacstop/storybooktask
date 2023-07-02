import * as React from "react";
import type { SVGProps } from "react";
const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141C24"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.353 15.838 21 18c-2.204-2.88-7.653-3.067-10.102-2.8v2.364c0 .894-1.084 1.338-1.712.702l-5.492-5.563a1 1 0 0 1 0-1.406l5.492-5.563c.628-.636 1.712-.192 1.712.702V8.8a9.87 9.87 0 0 1 9.455 7.038Z"
    />
  </svg>
);
export default SvgReply;
