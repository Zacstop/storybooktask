import styled from "styled-components";

export const SurveyFormContainer = styled.div``;

export const SectionFormDesktop = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
  `,
  HeaderWrapper: styled.div`
    width: 100%;
    max-width: 1200px;
    height: 41px;
  `,
  PageTitle: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;

    width: 120px;
    height: 32px;

    /* Primary/500 */

    background: #1a75ff;
    border-radius: 15px 15px 0px 0px;

    p {
      height: 24px;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      /* White */

      color: #ffffff;
    }
  `,

  ContentWrapper: styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 34px;

    width: 100%;
    max-width: 1200px;

    /* White */

    background: #ffffff;
    /* Primary/500 */

    border-top: 8px solid #1a75ff;
    /* Drop Shadow - On Light - S */

    box-shadow: 0px 2px 6px rgba(28, 39, 49, 0.08);
    border-radius: 0px 10px 0px 0px;
  `,
  FooterWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;

    width: 100%;
    max-width: 1200px;

    height: 56px;

    background: #ffffff;
    border-radius: 0px 0px 10px 10px;
  `,
};

export const SectionControlContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionControlDesktop = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    gap: 10px;

    position: relative;
    width: 372px;
    height: 56px;

    background: #ffffff;
    border-radius: 10px;

    button {
      width: 40px;
      height: 40px;

      border-radius: 50%;
      background-color: transparent;

      transition: background-color 0.2s ease-in-out;
      &:hover {
        background-color: #f2f2f2;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  `,

  BlurContainer: styled.div`
    height: 76px;
  `,
};
