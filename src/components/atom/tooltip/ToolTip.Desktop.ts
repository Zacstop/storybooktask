import styled from "styled-components";

export const ToolTipDesktop = {
  Container: styled.div`
    width: 10rem;
    height: 2.5rem;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08);
  `,

  Center: styled.div`
    width: 1.061rem;
    height: 1.061rem;
    margin: 0.002rem 2.97rem 1.438rem 2.97rem;
    transform: rotate(-315deg);
    border-radius: 1px;
    background-color: #637083;
  `,

  Content: styled.div`
    height: 2.125rem;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background-color: #637083;
  `,
}
