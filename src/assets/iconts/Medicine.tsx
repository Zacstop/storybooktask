import * as React from "react";
import type { SVGProps } from "react";
const SvgMedicine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 20H6a2 2 0 0 1-2-2v-7.628a1 1 0 0 1 .243-.654L6.591 7h6.818l2.348 2.718a1 1 0 0 1 .243.654V14m-8-1h2m0 0h2m-2 0v-2m0 2v2m8.5-.598-3 5.196M5 7h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Zm15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgMedicine;
