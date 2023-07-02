import * as React from "react";
import type { SVGProps } from "react";
const SvgStarSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#141C24"
      d="M11.779 2.42a.25.25 0 0 1 .442 0L15 7.683a.25.25 0 0 0 .179.13l5.866 1.015a.25.25 0 0 1 .136.42l-4.149 4.27a.25.25 0 0 0-.068.21l.847 5.892a.25.25 0 0 1-.357.26l-5.343-2.627a.25.25 0 0 0-.22 0l-5.343 2.627a.25.25 0 0 1-.357-.26l.847-5.892a.25.25 0 0 0-.068-.21l-4.15-4.27a.25.25 0 0 1 .137-.42l5.866-1.015a.25.25 0 0 0 .179-.13l2.778-5.265Z"
    />
  </svg>
);
export default SvgStarSolid;
