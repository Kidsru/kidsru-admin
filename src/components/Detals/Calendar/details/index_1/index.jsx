import React, { useMemo, useState } from "react";
import styles from "./index.module.css";

const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const getMonthData = (month, year) => {
  const date = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = (date.getDay() + 6) % 7; // Monday = 0
  return { daysInMonth, startDay };
};

function Calendar({ active = [] }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const activeDates = useMemo(() => {
    const result = [];
    active.forEach(({ year, month, day }) => {
      day.forEach((d) => {
        result.push(`${year}-${parseInt(month) - 1}-${d}`);
      });
    });
    return result;
  }, [active]);

  const toggleDate = (day) => {
    const dateKey = `${currentYear}-${currentMonth}-${day}`;
    // optional: if you want click interaction, handle here
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const renderDays = () => {
    const { daysInMonth, startDay } = getMonthData(currentMonth, currentYear);
    const calendarCells = [];
    const emptyCells = Array(startDay).fill(null);

    emptyCells.forEach((_, index) => {
      calendarCells.push(<div key={`empty-${index}`} className={styles.cell}></div>);
    });

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentYear}-${currentMonth}-${day}`;
      const isSelected = activeDates.includes(dateKey);

      calendarCells.push(
        <div
          key={day}
          className={`${styles.cell} ${isSelected ? styles.selected : ""}`}
          onClick={() => toggleDate(day)}
        >
          {day}
        </div>
      );
    }

    return calendarCells;
  };

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Календарь посещений занятий</h1>
      <div className={styles.header}>
        <button className={styles.arrow} onClick={prevMonth}>{"<"}</button>
        <h2>{`${monthNames[currentMonth]} ${currentYear}`}</h2>
        <button className={styles.arrow} onClick={nextMonth}>{">"}</button>
      </div>
      <div className={styles.weekdays}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.cell}>{day}</div>
        ))}
      </div>
      <div className={styles.grid}>{renderDays()}</div>
    </div>
  );
}

export default Calendar;