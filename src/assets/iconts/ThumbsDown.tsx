import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbsDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 14a1 1 0 0 1-1 1h-3V3h3a1 1 0 0 1 1 1v10ZM14.756 3.504 17 5v8h-.891a1 1 0 0 0-.889.54l-2.932 5.67c-.783 1.513-3.083.756-2.813-.927l.34-2.125A1 1 0 0 0 8.827 15H5.46a2 2 0 0 1-1.958-2.408l1.5-7.204A3 3 0 0 1 7.94 3h5.153a3 3 0 0 1 1.664.504Z"
    />
  </svg>
);
export default SvgThumbsDown;
