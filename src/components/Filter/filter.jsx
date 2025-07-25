import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./filter.module.css";

const Filter = ({
    number = 100,
    filtered = 50,
    filterField = null,
    onInputChange
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterType, setFilterType] = useState(filterField?.key || "status");
    const [showSelect, setShowSelect] = useState(false);

    const [searchValue, setSearchValue] = useState("");

    const handleInput = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onInputChange(value);
    };

    const handleTypeChange = (e) => {
        const value = e.target.value;

        if (value === "") {
            searchParams.delete(filterType);
        } else {
            searchParams.set(filterType, value);
        }

        setSearchParams(searchParams);
    };

    const filters = Array.from(searchParams.entries());
    const removeFilter = (key) => {
        searchParams.delete(key);
        setSearchParams(searchParams);
    };

    return (
        <div className={styles.filter}>
            <div className={styles.filterLeft}>
                <div className={styles.filterLeftTop}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ position: "relative" }}>
                            <svg
                                onClick={() => setShowSelect((prev) => !prev)}
                                width="10"
                                height="12"
                                viewBox="0 0 10 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                            >
                                <path
                                    d="M5.88482 11.4277C5.78906 11.4277 5.69589 11.3967 5.61929 11.3392L3.84911 10.0116C3.79414 9.97037 3.74953 9.91691 3.71881 9.85546C3.68808 9.79401 3.67209 9.72626 3.67209 9.65755V7.17045L0.567188 3.67743C0.346677 3.42867 0.202699 3.12152 0.152558 2.79289C0.102418 2.46426 0.14825 2.12815 0.284545 1.82494C0.420839 1.52174 0.641798 1.26435 0.920862 1.0837C1.19993 0.903059 1.52522 0.806851 1.85765 0.806641H8.1418C8.4742 0.807031 8.79941 0.903398 9.07837 1.08416C9.35732 1.26493 9.57814 1.5224 9.71428 1.82564C9.85043 2.12888 9.89612 2.46498 9.84585 2.79356C9.79559 3.12214 9.65151 3.42921 9.43093 3.67788L6.32736 7.17045V10.9852C6.32736 11.1026 6.28074 11.2151 6.19774 11.2981C6.11475 11.3811 6.00219 11.4277 5.88482 11.4277ZM4.55718 9.43628L5.44227 10.1001V7.00228C5.44236 6.89392 5.4822 6.78937 5.55423 6.70843L8.77066 3.08973C8.87791 2.96851 8.94789 2.81891 8.97221 2.65889C8.99652 2.49888 8.97414 2.33524 8.90774 2.18763C8.84134 2.04002 8.73375 1.91471 8.59789 1.82675C8.46202 1.73878 8.30365 1.6919 8.1418 1.69173H1.85765C1.69588 1.69198 1.53761 1.73888 1.40183 1.82683C1.26605 1.91477 1.15852 2.04001 1.09214 2.18754C1.02576 2.33506 1.00334 2.49861 1.02758 2.65855C1.05182 2.8185 1.12168 2.96806 1.22879 3.08929L4.44566 6.70843C4.51753 6.78943 4.55721 6.89398 4.55718 7.00228V9.43628Z"
                                    fill="#838383"
                                />
                            </svg>

                            {showSelect && filterField?.options?.length > 0 && (
                                <select
                                    onChange={handleTypeChange}
                                    className={styles.filterSelect}
                                    defaultValue=""
                                    style={{
                                        position: "absolute",
                                        top: "20px",
                                        left: "0",
                                        zIndex: 1000,
                                        background: "#fff",
                                        border: "1px solid #ccc",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                        minWidth: "150px",
                                    }}
                                >
                                    <option value="">Выберите статус</option>
                                    {filterField.options.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            )}
                        </div>

                        {filters.length === 0 ? (
                            <p className={styles.noFilters}>Фильтры не применены</p>
                        ) : (
                            filters.map(([key, value]) => (
                                <div className={styles.tag} key={key}>
                                    {value}
                                    <span className={styles.close} onClick={() => removeFilter(key)}>×</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className={styles.filterLeftBottom}>
                    <p>Всего строк в таблице</p><span>{number}</span>
                </div>
            </div>

            <div className={styles.filterRight}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8327 12.9499L10.3327 10.4499M3.16602 7.44987C3.16602 5.14868 5.0315 3.2832 7.33268 3.2832C9.63388 3.2832 11.4993 5.14868 11.4993 7.44987C11.4993 9.75107 9.63388 11.6165 7.33268 11.6165C5.0315 11.6165 3.16602 9.75107 3.16602 7.44987Z" stroke="#C7C7C7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                    type="text"
                    placeholder="Поиск"
                    value={searchValue}
                    onChange={(e) => handleInput?.(e)}
                />
            </div>
        </div>
    );
};

export default Filter;
