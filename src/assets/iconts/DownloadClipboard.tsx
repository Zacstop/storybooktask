import * as React from "react";
import type { SVGProps } from "react";
const SvgDownloadClipboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 5v2H9V5m6 0a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2m6 0h2a2 2 0 0 1 2 2v5M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4m5.5-6v6m0 0L14 18.5m2.5 2.5 2.5-2.5"
    />
  </svg>
);
export default SvgDownloadClipboard;
