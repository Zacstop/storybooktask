import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarSetting = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 5H6a2 2 0 0 0-2 2v3m4-5h8M8 5V3m0 2v2m8-2h2a2 2 0 0 1 2 2v3H4m12-5V3m0 2v2M4 10v9a2 2 0 0 0 2 2h5m6.464-6a2 2 0 0 1 1.732 1m-1.732-1a2 2 0 0 0-1.732 1m1.732-1v-2m0 8v-2.033M20.928 15l-1.732 1M14 19l1.732-1m5.196 1-1.732-1M14 15l1.732 1m0 2a1.99 1.99 0 0 1-.268-1c0-.364.098-.706.268-1m0 2c.393.68 1.066.98 1.732.967m0 0c.688-.014 1.37-.361 1.733-.967m0 0c.168-.28.267-.616.267-1a1.99 1.99 0 0 0-.268-1"
    />
  </svg>
);
export default SvgCalendarSetting;
