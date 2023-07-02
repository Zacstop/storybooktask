import * as React from "react";
import type { SVGProps } from "react";
const SvgPicker = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17 9.828-8.036 8.037a2 2 0 0 1-1.022.547l-.224.044M17 9.828l2.793-2.792a1 1 0 0 0 0-1.415l-1.414-1.414a1 1 0 0 0-1.415 0L14.172 7M17 9.828 14.172 7M17 9.828l2 2M14.172 7l-8.037 8.036a2 2 0 0 0-.547 1.022l-.058.29M14.172 7l-2-2M5.53 16.35l-.176.883L5 19l2.718-.544M5.53 16.35l2.188 2.107"
    />
  </svg>
);
export default SvgPicker;
