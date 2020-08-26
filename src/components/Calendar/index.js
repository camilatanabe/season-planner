import React, { useState } from "react";
import * as dateFns from "date-fns";
import "./styles.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };

  const header = () => {
    const dateFormat = "MM yyyy";
    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="column col-center">
          <span>{dateFns.format(currentDate, dateFormat)}</span>
        </div>
        <div className="column col-end">
          <div className="icon" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };
  console.log("entra aqui");
  return (
    <div className="calendar">
      <div>{header()}</div>
    </div>
  );
};

export default Calendar;
