import * as React from "react";
import type { SVGProps } from "react";
const SvgAttachment = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m10.885 15.854 5.698-5.698c.411-.424.633-.998.618-1.6a2.368 2.368 0 0 0-.697-1.61 2.368 2.368 0 0 0-1.611-.697 2.215 2.215 0 0 0-1.6.618l-7.489 7.478a3.704 3.704 0 0 0-.84 1.245c-.192.469-.289.975-.283 1.488.005.513.113 1.024.316 1.502a4.061 4.061 0 0 0 2.15 2.15c.478.203.988.31 1.501.315.514.006 1.02-.09 1.489-.283a3.703 3.703 0 0 0 1.244-.84l7.534-7.534a5.277 5.277 0 0 0 1.478-3.813 5.643 5.643 0 0 0-1.661-3.843 5.643 5.643 0 0 0-3.843-1.661 5.277 5.277 0 0 0-3.813 1.477l-7.041 7.04"
    />
  </svg>
);
export default SvgAttachment;
