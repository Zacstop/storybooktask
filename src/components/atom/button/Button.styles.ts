// import { css } from "styled-components";
// import styled from "styled-components";

// export const ButtonStyles = css`
//   min-width: 120px;
//   min-height: 44px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;

//   font-weight: 400;
//   color: #212529;
//   text-align: center;
//   vertical-align: middle;
//   cursor: pointer;
//   border: 1px solid transparent;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   line-height: 1.5;
//   border-radius: 0.25rem;

//   transition: filter 0.15s ease-in-out;

//   svg {
//     path {
//       stroke: #fff;
//     }
//   }

//   &:hover {
//     filter: brightness(85%);
//   }
// `;


import { css } from "styled-components"

export const ButtonStyles = css`
  width: 124px;
  height: 36px;
  flex-grow: 0;
  /* display: flex; */
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  object-fit: contain;
  border-radius: 4px;
  background-color: #1a75ff;
`