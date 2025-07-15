import { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const visiblePages = 5;
  const [startPage, setStartPage] = useState(1);

  const endPage = Math.min(startPage + visiblePages - 1, totalPages);
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      if (newPage < startPage) {
        setStartPage(Math.max(newPage - visiblePages + 1, 1));
      }
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      if (newPage > endPage) {
        setStartPage(startPage + 1);
      }
      onPageChange(newPage);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const dropdownPages = [];
  for (let i = visiblePages + 1; i <= totalPages; i++) {
    dropdownPages.push(i);
  }

  const handleSelect = (e) => {
    const page = Number(e.target.value);
    onPageChange(page);

    // dropdowndan tanlaganda startPage ni moslashtiramiz
    if (page > endPage) {
      setStartPage(Math.min(page - visiblePages + 1, totalPages - visiblePages + 1));
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrowBtn}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z" /></svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.pageBtn} ${currentPage === page ? styles.active : ""
            }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.arrowBtn}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z" /></svg>
      </button>

      {dropdownPages.length > 0 && (
        <select
          className={styles.dropdown}
          value={currentPage > visiblePages ? currentPage : ""}
          onChange={handleSelect}
        >
          <option value="" disabled>
            ...
          </option>
          {dropdownPages.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      )} <p className={styles.text}>/Page</p>

    </div>
  );
};

export default Pagination;
