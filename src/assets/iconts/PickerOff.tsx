import * as React from "react";
import type { SVGProps } from "react";
const SvgPickerOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 5 14 14m-2-9.172 2.793-2.792a1 1 0 0 0 0-1.415l-1.414-1.414a1 1 0 0 0-1.415 0L14.172 7M17 9.828 14.172 7M17 9.828l2 2m-2-2-1.587 1.587M14.172 7l-2-2m2 2-1.588 1.587M5.53 16.348l.058-.29a2 2 0 0 1 .547-1.022l3.804-3.804M5.53 16.348l2.188 2.108M5.53 16.348 5 19l2.718-.544m0 0 .224-.044a2 2 0 0 0 1.022-.547l3.804-3.804"
    />
  </svg>
);
export default SvgPickerOff;
