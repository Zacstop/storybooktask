import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 13.5 2.782-2.782m0 0 6.469-5.506a2 2 0 0 1 .553-.334l.03-.011c.816-.327 1.626.483 1.3 1.3l-.012.029c-.08.201-.194.388-.334.553l-5.506 6.47m-2.5-2.5c.833.072 2.5.674 2.5 2.5m0 0L10 16.5m-5.293 1.98-.222-1.192A2.78 2.78 0 1 1 10 16.781V17a3 3 0 0 1-3 3H3.926a.304.304 0 0 1-.18-.548l.812-.597a.379.379 0 0 0 .149-.374Z"
    />
  </svg>
);
export default SvgBrush;
