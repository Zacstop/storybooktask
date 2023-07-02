import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarStarred = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M8 5H6a2 2 0 0 0-2 2v3m4-5h8M8 5V3m0 2v2m8-2h2a2 2 0 0 1 2 2v3m-4-5V3m0 2v2m4 3H4m16 0v1.75M4 10v9a2 2 0 0 0 2 2h5m5.723-7.334a.3.3 0 0 1 .554 0l.975 2.345a.3.3 0 0 0 .253.183l2.531.203a.3.3 0 0 1 .171.527l-1.928 1.652a.3.3 0 0 0-.097.297l.59 2.47a.3.3 0 0 1-.449.326l-2.167-1.323a.3.3 0 0 0-.312 0l-2.167 1.323a.3.3 0 0 1-.449-.326l.59-2.47a.3.3 0 0 0-.097-.297l-1.928-1.652a.3.3 0 0 1 .17-.527l2.532-.203a.3.3 0 0 0 .253-.183l.975-2.345Z"
    />
  </svg>
);
export default SvgCalendarStarred;
