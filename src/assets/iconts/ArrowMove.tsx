import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMove = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9V3.343m0 0L9.172 6.172M12 3.343l2.828 2.829M15 12h5.657m0 0-2.829-2.828M20.657 12l-2.829 2.828M9 12H3.343m0 0 2.829 2.828M3.343 12l2.829-2.828M12 15v5.657m0 0 2.828-2.829M12 20.657l-2.828-2.829"
    />
  </svg>
);
export default SvgArrowMove;
