import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowserSettings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 10v8a2 2 0 0 0 2 2h6M3 10V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 10h18m0 0v2m-3 3.75c.641 0 1.2.352 1.5.875M18 15.75c-.641 0-1.2.352-1.5.875m1.5-.875V14m0 7v-1.78m3-3.47-1.5.875M15 19.25l1.5-.875m4.5.875-1.5-.875M15 15.75l1.5.875m0 1.75a1.756 1.756 0 0 1-.232-.875c0-.319.084-.618.232-.875m0 1.75c.34.596.923.858 1.5.846m0 0c.596-.012 1.186-.316 1.5-.846m0 0c.146-.245.232-.54.232-.875 0-.319-.084-.618-.232-.875M6 7h.01M9 7h.01"
    />
  </svg>
);
export default SvgBrowserSettings;
