import styles from "./index.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ReactComponent as ClockIcon } from "../../../../../assets/icon/clock.svg"

const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

function getStartOfWeek(date) {
  const day = date.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(date);
  monday.setDate(date.getDate() + mondayOffset);
  return monday;
}

function formatDateKey(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}


function formatDateDisplay(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

function parseKeyToDate(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function Index({activeDates = []}) {
  const lastActiveDate = activeDates.length > 0
    ? parseKeyToDate(activeDates[activeDates.length - 1])
    : new Date();

  const [currentDate, setCurrentDate] = useState(getStartOfWeek(lastActiveDate));



  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(currentDate);
    d.setDate(currentDate.getDate() + i);
    return d;
  });

  const nextWeek = () => {
    const next = new Date(currentDate);
    next.setDate(currentDate.getDate() + 7);
    setCurrentDate(getStartOfWeek(next));
  };

  const prevWeek = () => {
    const prev = new Date(currentDate);
    prev.setDate(currentDate.getDate() - 7);
    setCurrentDate(getStartOfWeek(prev));
  };

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const currentMonthName = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  const getFormattedRange = () => {
    if (activeDates.length === 0) return null;
    const [startKey, endKey] = [activeDates[0], activeDates[activeDates.length - 1]];
    const [startY, startM, startD] = startKey.split("-").map(Number);
    const [endY, endM, endD] = endKey.split("-").map(Number);

    const startDate = new Date(startY, startM, startD);
    const endDate = new Date(endY, endM, endD);

    return (
      <span className={styles.activeDates}>
        <ClockIcon /> {formatDateDisplay(startDate)} - {formatDateDisplay(endDate)}
      </span>

    );
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Ударный режим</h2>

      <div className={styles.header}>
        <button className={styles.arrow} onClick={prevWeek}><FaChevronLeft /></button>
        <h2>{`${currentMonthName} ${currentYear}`}</h2>
        <button className={styles.arrow} onClick={nextWeek}><FaChevronRight /></button>
      </div>

      <div className={styles.calendar}>
        {weekDates.map((date, idx) => {
          const key = formatDateKey(date);
          const isSelected = activeDates.includes(key);
          const isLast = activeDates[activeDates.length - 1] === key;

          return (
            <div
              key={idx}
              className={`${styles.cell} ${isSelected ? styles.selected : ""}`}
            >
              <div className={styles.day}>{date.getDate()}</div>
              <div className={styles.weekday}>
                {daysOfWeek[date.getDay() === 0 ? 6 : date.getDay() - 1]}
              </div>
              {isLast && <div className={styles.dot} />}
            </div>
          );
        })}
      </div>

      <div className={styles.sessionInfo}>
        <div className={styles.dateRange}>{getFormattedRange()}</div>
        <h3>{activeDates.length} дня подряд</h3>
        <p>Сессия каждодневного посещения занятий - в днях</p>
      </div>
    </div>
  );
}

export default Index;
