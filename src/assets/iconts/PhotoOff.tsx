import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 3 18 18M8.8 4h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 6.28 20 7.12 20 8.8V15l-2.793-2.793M4.002 15.998C4 15.755 4 15.49 4 15.2V8.8c0-1.68 0-2.52.327-3.162A3 3 0 0 1 4.764 5m-.762 10.998c.008 1.166.054 1.833.325 2.364a3 3 0 0 0 1.311 1.311C6.28 20 7.12 20 8.8 20h6.4c1.68 0 2.52 0 3.162-.327.273-.14.522-.319.739-.531M4 15.998 4 16m.002-.002L9.086 10.5a1 1 0 0 1 1.414 0l5.543 5.543"
    />
  </svg>
);
export default SvgPhotoOff;
