import * as React from "react";
import type { SVGProps } from "react";
const SvgAddPhotoCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 11v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.5a2 2 0 0 0 1.6-.8l1.05-1.4a2 2 0 0 1 1.6-.8h2.5m5.25 0v2.5m0 0V9m0-2.5H16m2.5 0H21M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default SvgAddPhotoCamera;
