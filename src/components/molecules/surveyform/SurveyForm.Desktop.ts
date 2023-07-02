import styled from "styled-components";

export const SurveyFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const SurveyFormDesktop = {
  Container: styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 34px;
    gap: 20px;

    width: 100%;
    max-width: 1200px;

    /* White */

    background: #ffffff;
    /* Primary/500 */

    border-top: 8px solid #1a75ff;
    border-radius: 10px 10px 0px 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  `,

  Wrapper: styled.div``,
};

export const FormControlDesktop = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0 10px 0;
    gap: 10px;

    width: 1200px;
    height: 60px;

    background: #ffffff;
    border-radius: 0px 0px 10px 10px;

    /* Inside auto layout */
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 1132px;
    height: 40px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  `,

  IconGroup: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px;
    gap: 8px;

    width: 136px;
    height: 40px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

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
};

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
