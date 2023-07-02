import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    box-shadow: inset 0 0 0 8px #d0d5dd;
    border: 4px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 0 8px #98a2b3;
  }

  &::-webkit-scrollbar {
    background-color: none;
  }
  
  &::-webkit-scrollbar-corner {
    background-color: none;
  }

  *{
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
  }
`;
