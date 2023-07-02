import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkBroke = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.37 11.073-2.956 2.956a2 2 0 0 0 0 2.828L6.956 18.4a2 2 0 0 0 2.829 0l2.956-2.956M11.073 8.37l2.956-2.956a2 2 0 0 1 2.828 0L18.4 6.956a2 2 0 0 1 0 2.829l-2.956 2.956M6.649 6.649 4.883 4.883m14.216 14.216-1.766-1.766M9.351 5.873V4m5.298 16v-1.873M5.873 9.351H4m16 5.298h-1.873"
    />
  </svg>
);
export default SvgLinkBroke;
