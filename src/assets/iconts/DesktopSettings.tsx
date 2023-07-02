import * as React from "react";
import type { SVGProps } from "react";
const SvgDesktopSettings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1m-2.536-8a2 2 0 0 1 1.732 1m-1.732-1a2 2 0 0 0-1.732 1m1.732-1V3m0 8V8.967M20.928 5l-1.732 1M14 9l1.732-1m5.196 1-1.732-1M14 5l1.732 1m0 2a1.99 1.99 0 0 1-.268-1c0-.364.098-.706.268-1m0 2c.393.68 1.066.98 1.732.967m0 0c.688-.014 1.37-.361 1.733-.967m0 0c.168-.28.267-.616.267-1a1.99 1.99 0 0 0-.268-1M12 16v4m-4 0h8"
    />
  </svg>
);
export default SvgDesktopSettings;
