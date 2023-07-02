import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyDollar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6h20M2 6v12M2 6v4a4 4 0 0 0 4-4H2Zm20 0v12m0-12h-4a4 4 0 0 0 4 4V6Zm0 12H2m20 0v-4a4 4 0 0 0-4 4h4ZM2 18h4a4 4 0 0 0-4-4v4Zm12.074-8.5h-2.74c-.737 0-1.334.56-1.334 1.25S10.597 12 11.333 12h1.778c.736 0 1.333.56 1.333 1.25s-.597 1.25-1.333 1.25H10m2-4.983V8.5m0 7.017V14.5"
    />
  </svg>
);
export default SvgMoneyDollar;
