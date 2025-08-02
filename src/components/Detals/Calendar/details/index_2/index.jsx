import styles from "./index.module.css";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ReactComponent as ClockIcon } from "../../../../../assets/icon/clock.svg";

const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

function getStartOfWeek(date) {
  const day = date.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(date);
  monday.setDate(date.getDate() + mondayOffset);
  return monday;
}

function formatDateDisplay(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

function Index({ weekStatus = [] }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(getStartOfWeek(today));

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

  const completedDays = weekStatus.filter(day => day.done);
  const lastCompletedIdx = weekStatus.map(d => d.done).lastIndexOf(true);

  const getFormattedRange = () => {
    if (completedDays.length === 0) return null;

    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() + weekStatus.findIndex(d => d.done));

    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + lastCompletedIdx);

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
          const isSelected = weekStatus[idx]?.done;
          const isLast = idx === lastCompletedIdx;

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
        <h3>{completedDays.length} дня подряд</h3>
        <p>Сессия каждодневного посещения занятий - в днях</p>
      </div>
    </div>
  );
}

export default Index;
