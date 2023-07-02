import styled from "styled-components";

export const CalendarContainer = styled.div`
  position: relative;
`;

export const CalendarDesktop = {
  ButtonContainer: styled.button`
    box-sizing: border-box;
    background-color: #fff;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 8px;

    height: 40px;

    /* Neutral Gray/200 */

    border: 1px solid #e4e7ec;
    border-radius: 8px;
  `,

  Container: styled.div`
    position: absolute;
    top: 45px;
    left: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    width: 328px;
    height: 505px;

    /* White */

    background: #ffffff;
    /* Shadow/xl */

    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;

    /* Inside auto layout */
  `,

  CalendarContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px;
    gap: 16px;

    border: 1px solid #e4e7ec;

    height: 432px;

    /* Inside auto layout */
  `,

  MonthContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 57px;
    width: 100%;

    height: 24px;

    svg {
      cursor: pointer;
    }
  `,

  ActionContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    width: 280px;
    height: 40px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  `,

  DatesContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 280px;
    height: 304px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
  `,

  CalendarBottom: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;

    height: 72px;
  `,
};
