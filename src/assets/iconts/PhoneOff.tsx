import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoneOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 5 5 19m7.843-.843c1.713.862 3.73 1.483 6.095 1.75.574.064 1.062-.396 1.062-.974v-2.152a1 1 0 0 0-.758-.97l-2.693-.674a1 1 0 0 0-.95.263l-2.756 2.757Zm0 0c-1.618-.814-2.73-1.51-3.843-2.657m-2.759-3.741c-1.31-2.35-1.955-4.792-2.166-6.728C4.013 4.469 4.469 4 5.034 4H7.18a1 1 0 0 1 .98.804l.735 3.671a1 1 0 0 1-.273.903l-2.38 2.38Zm0 0c.22.395.5.854.759 1.241"
    />
  </svg>
);
export default SvgPhoneOff;
