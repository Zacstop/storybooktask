import React from "react";
import {
  CalendarDesktop,
  CalendarContainer,
} from "./Calendar.Desktop";
import { Calendar as CalendarIcon } from "../../../assets/iconts";
import { Button } from "../button";
import SvgChevronLeft from "../../../assets/iconts/ChevronLeft";
import SvgChevronRight from "../../../assets/iconts/ChevronRight";
import { InputBox } from "../input";

const Calendar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <CalendarContainer>
      <CalendarDesktop.ButtonContainer
        onClick={() => {
          setOpen((value) => !value);
        }}
      >
        <CalendarIcon />
        날짜를 선택해 주세요.
      </CalendarDesktop.ButtonContainer>
      {open && (
        <CalendarDesktop.Container>
          <CalendarDesktop.CalendarContent>
            <CalendarDesktop.MonthContainer>
              <SvgChevronLeft />
              2022년 1월
              <SvgChevronRight />
            </CalendarDesktop.MonthContainer>
            <CalendarDesktop.ActionContainer>
              <InputBox label="" onChange={() => {}} />
            </CalendarDesktop.ActionContainer>
            <CalendarDesktop.DatesContainer>
              1
            </CalendarDesktop.DatesContainer>
          </CalendarDesktop.CalendarContent>
          <CalendarDesktop.CalendarBottom>
            <Button type="button" label="Cancel" />
            <Button type="button" label="Apply" />
          </CalendarDesktop.CalendarBottom>
        </CalendarDesktop.Container>
      )}
    </CalendarContainer>
  );
};

export default Calendar;
