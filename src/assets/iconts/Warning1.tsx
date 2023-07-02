import * as React from "react";
import type { SVGProps } from "react";
const SvgWarning1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 10v4m0 3h.01M10.252 5.147 3.65 17.029C2.91 18.362 3.874 20 5.399 20h13.202c1.525 0 2.489-1.638 1.748-2.971l-6.6-11.882c-.763-1.372-2.735-1.372-3.497 0Z"
    />
  </svg>
);
export default SvgWarning1;
