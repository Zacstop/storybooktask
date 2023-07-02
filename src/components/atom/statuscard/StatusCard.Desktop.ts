import styled from "styled-components";

interface StatusCardProps {
  iconBgColor: string;
  iconColor: string;
}

export const StatusCardStyle = {
  Container: styled.div`
    width: 11.25rem;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.563rem 1.063rem;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(28, 39, 49, 0.08);
    border: solid 1px #f2f4f7;
    background-color: #fff;
  `,

  Content: styled.div`
    height: 3.125rem;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
    padding: 0;
  `,

  ContentCount: styled.div`
    width: 1.875rem;
    height: 2rem;
    flex-grow: 0;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #141c24;
  `,
  ContentLabel: styled.div`
    height: 1rem;
    flex-grow: 0;
    font-size: 0.75rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #141c24;
  `,

  IconContent: styled.div<StatusCardProps>`
    flex-grow: 0;
    padding: 0.625rem;
    border-radius: 500px;
    background-color: ${({ iconBgColor }) => {
      return `${iconBgColor}`;
    }};

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      path {
        stroke: ${({ iconColor }) => {
          return `${iconColor}`;
        }};
      }
    }
  `,
};
