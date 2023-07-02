import * as React from "react";
import type { SVGProps } from "react";
const SvgEarth = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3.048a5 5 0 0 0 .982 8.3c2.018 1.013 2.789-.352 3.881.384.71.478.897 1.44.42 2.149-.501.742-1.283 1.119-1.148 2.336.077.687.499 1.278 1.045 1.783M4 9.28a4.98 4.98 0 0 1 2.806 1.846 4.982 4.982 0 0 1 .992 3.424c-.052.626.356 1.258.881 1.603A2.71 2.71 0 0 1 9 20.44M21.001 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgEarth;
