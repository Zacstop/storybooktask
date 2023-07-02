import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoneCall = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.843 18.157c1.713.862 3.73 1.483 6.095 1.75.574.064 1.062-.396 1.062-.974v-2.152a1 1 0 0 0-.758-.97l-2.693-.674a1 1 0 0 0-.95.263l-2.756 2.757Zm0 0c-3.116-1.568-5.226-3.932-6.602-6.398m0 0c-1.31-2.35-1.955-4.792-2.166-6.728-.062-.562.394-1.03.959-1.03H7.18a1 1 0 0 1 .98.803l.735 3.671a1 1 0 0 1-.273.903l-2.38 2.38Zm6.713-4.667a5 5 0 0 1 3.96 3.988m-3.817-8.013a9 9 0 0 1 7.828 7.774"
    />
  </svg>
);
export default SvgPhoneCall;
