import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudSettings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 18.914a4.287 4.287 0 0 1 0-8.4V10.5a5.5 5.5 0 1 1 10.978.5H17a4 4 0 0 1 1 7.874m-6-4.124c.641 0 1.2.352 1.5.875M12 14.75c-.641 0-1.2.352-1.5.875m1.5-.875V13m0 7v-1.78m3-3.47-1.5.875M9 18.25l1.5-.875m4.5.875-1.5-.875M9 14.75l1.5.875m0 1.75a1.756 1.756 0 0 1-.232-.875c0-.319.084-.618.232-.875m0 1.75c.34.596.923.858 1.5.846m0 0c.596-.012 1.186-.316 1.5-.846m0 0c.146-.245.232-.54.232-.875 0-.319-.084-.618-.232-.875"
    />
  </svg>
);
export default SvgCloudSettings;
