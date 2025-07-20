import BtnGreen from '../Detals/PaymeStatusBtn/BtnGreen'
import BtnRed from '../Detals/PaymeStatusBtn/BtnRed'
import BtnBlue from '../Detals/PaymeStatusBtn/BtnBlue'
import BtnGrey from '../Detals/PaymeStatusBtn/BtnGrey'
import ProgressBar from '../Detals/progressBar/progressBar'
import Actions from '../Detals/ActionsBtns/Actions'
import { FaPlus } from "react-icons/fa";
import InternetBtnZero from '../Detals/InternetBtn/InternetZero'
import InternetBtnSlow from '../Detals/InternetBtn/InternetBtnSlow'
import InternetBtnNormal from '../Detals/InternetBtn/InternetBtnNormal'
import InternetBtnGood from '../Detals/InternetBtn/InternetBtnGood'
import Pagination from '../Detals/pagination/Pagination'
import { useState } from 'react'
import TableButton from '../Detals/TableButton/tableButton'
import DownloadBtn from '../Detals/DownloadBtn/downloadBtn'
import SwitchButton from '../Detals/SwitchBtn/switchBtn'
import MentorBtn from '../Detals/MentorBtn/MentorBtn'
import styles from "./table.module.css"
import { ReactComponent as Arrow1 } from "../../assets/icon/table-left.svg"
import { ReactComponent as Arrow2 } from "../../assets/icon/table-bottom.svg"
import { useSearchParams } from 'react-router-dom'

const Table = ({filterKey = "status", buttonText, questionnaire, thead, data, itemsPerPage, onView, onDelete, onEdit, addButton, handleClick, hideView, achievements }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedRows, setExpandedRows] = useState({});
    const [allChecked, setAllChecked] = useState(false);
    const [checkedRows, setCheckedRows] = useState({});

    const [searchParams] = useSearchParams();
    const status = searchParams.get(filterKey);

    function filterByStatus(data, filterKey, statusValue) {
        return data
            .map((item) => {
                const children = item.children || [];

                const filteredChildren = filterByStatus(children, filterKey, statusValue);

                const isMatch = item[filterKey] === statusValue;

                if (isMatch || filteredChildren.length > 0) {
                    return {
                        ...item,
                        children: filteredChildren.length > 0 ? filteredChildren : [],
                    };
                }

                return null;
            })
            .filter(Boolean);
    }


    const filteredData = status
        ? filterByStatus(data, filterKey, status)
        : data;



    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const getAllUserIds = (users) => {
        let ids = [];
        users.forEach(user => {
            ids.push(user.id);
            if (Array.isArray(user.children) && user.children.length > 0) {
                ids = ids.concat(getAllUserIds(user.children));
            }
        });
        return ids;
    };

    const toggleCheck = (e) => {
        const checked = e.target.checked;
        setAllChecked(checked);
        const newCheckedRows = {};
        const allIds = getAllUserIds(data);
        allIds.forEach(id => {
            newCheckedRows[id] = checked;
        });
        setCheckedRows(newCheckedRows);
    }

    const toggleRow = (id) => {
        setExpandedRows(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const renderRow = (user, level = 0) => {
        const hasChildren = Array.isArray(user.children) && user.children.length > 0;
        const isExpanded = expandedRows[user.id];

        const handleRowCheck = (e) => {
            setCheckedRows(prev => ({
                ...prev,
                [user.id]: e.target.checked
            }));
        };

        return (
            <>
                <tr key={user.id}>
                    <td style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <input
                            type="checkbox"
                            checked={checkedRows[user.id] || false}
                            onChange={handleRowCheck}
                        />
                    </td>

                    {thead.includes("id") && (
                        <td style={{ textAlign: "center" }}>{user.id}</td>
                    )}
                    {thead.includes("Название") && (
                        <td style={{ textAlign: "center", minWidth: "206px" }}>{user.title}</td>
                    )}
                    {thead.includes("Описание") && (
                        <td style={{ minWidth: "222px", maxWidth: "222px" }}>{user.description}</td>
                    )}
                    {thead.includes("Кол-во игр") && (
                        <td style={{ textAlign: "center", minWidth: "100px" }}> <p className={styles.gameCount}>{user.gameCount}</p> </td>
                    )}
                    {thead.includes("На русском") && (
                        <td style={{ textAlign: "center", minWidth: "230px" }}>{user.russian}</td>
                    )}
                    {thead.includes("На узбекском") && (
                        <td style={{ textAlign: "center", minWidth: "230px" }}>{user.uzbek}</td>
                    )}

                    {!achievements && (
                        (thead.includes("Курс") || thead.includes("Блок") || thead.includes("Урок")) &&
                        <td style={{ paddingLeft: `${level * 20}px`, minWidth: "300px" }}>
                            <div style={{ paddingLeft: "10px" }} className={styles.accordionItem}>
                                {hasChildren && (
                                    <button onClick={() => toggleRow(user.id)} className={styles.expandBtn}>
                                        {isExpanded ? <Arrow2 /> : <Arrow1 />}
                                    </button>
                                )}
                                {user.name}
                            </div>
                        </td>
                    )
                    }
                    {thead.includes("Тип") && <td style={{ paddingLeft: `${level * 20}px`, minWidth: "300px" }}>
                        <div style={{ paddingLeft: "10px" }} className={styles.accordionItem}>
                            {hasChildren && (
                                <button onClick={() => toggleRow(user.id)} className={styles.expandBtn}>
                                    {isExpanded ? <Arrow2 /> : <Arrow1 />}
                                </button>
                            )}
                            {user.name}
                        </div>
                    </td>
                    }
                    {
                        thead.includes("Игра") && <td style={{ minWidth: "171px" }}>{user.name}</td>
                    }
                    {
                        thead.includes("Имя и Фамилия") && <td style={{ minWidth: "171px" }}>{user.name}</td>
                    }
                    {
                        thead.includes("Номер телефона") && <td style={{ minWidth: "171px" }}>{user.phone}</td>
                    }
                    {
                        thead.includes("Дата регистрации") && <td style={{ minWidth: "171px" }}>{user.registrationDate}</td>
                    }
                    {!achievements && (
                        thead.includes("Модуль") && (
                            <td style={{ paddingLeft: `${level * 20}px`, minWidth: "300px" }}>
                                <div style={{ paddingLeft: "10px" }} className={styles.accordionItem}>
                                    {Array.isArray(user.children) && user.children.length > 0 ? (
                                        <button onClick={() => toggleRow(user.id)} className={styles.expandBtn}>
                                            {expandedRows[user.id] ? <Arrow2 /> : <Arrow1 />}
                                        </button>
                                    ) : null}
                                    {user.modul || user.name}
                                </div>
                            </td>
                        )
                    )}

                    {
                        thead.includes("Статус оплаты") || thead.includes("Статус") ? (
                            <td style={{ minWidth: "171px" }}>
                                {
                                    user.status === "Оплачен" ? <BtnGreen text={user.status} /> :
                                        user.status === "В ожидании" ? <BtnBlue text={user.status} /> :
                                            user.status === "Просрочен" ? <BtnGrey text={user.status} /> :
                                                user.status === "Остановлен" ? <BtnRed text={user.status} /> :
                                                    user.status === "Создан" ? <BtnGreen text={user.status} /> :
                                                        user.status === "В процессе" ? <BtnBlue text={user.status} /> :
                                                            user.status === "Не начат" ? <BtnGrey text={user.status} /> :
                                                                user.status === "На проверке" ? <BtnGrey text={user.status} /> :
                                                                    user.status === "Не оплачено" ? <BtnRed text={user.status} /> :
                                                                        <BtnRed />
                                }
                            </td>
                        ) : null
                    }
                    {
                        thead.includes("Утвердить") && <td style={{ minWidth: "163px", textAlign: "center" }}> <SwitchButton on={user.approved} /> </td>
                    }
                    {
                        thead.includes("Дата создания") && <td style={{ minWidth: "171px" }}>{user.createdAt}</td>
                    }
                    {
                        thead.includes("Дата покупки") && <td style={{ minWidth: "171px" }}>{user.purchaseDate}</td>
                    }
                    {
                        thead.includes("Сумма") && <td style={{ minWidth: "171px" }}>{user.sum} сум</td>
                    }
                    {
                        thead.includes("Квитанция") && <td style={{ minWidth: "171px" }}><DownloadBtn /></td>
                    }
                    {
                        thead.includes("Последний раз заходил") && <td style={{ minWidth: "171px" }}>{user.lastVisit}</td>
                    }
                    {
                        thead.includes("Последний Урок → Игра") && <td style={{ minWidth: "133px", textAlign: "center" }}>{user.lessonProgress}</td>
                    }
                    {
                        thead.includes("Осталось уроков в модуле") && (
                            <td style={{ minWidth: "171px", textAlign: "center", backgroundColor: user.lessonsLeft <= 5 ? "#FDC6C6" : "transparent" }}>
                                {user.lessonsLeft}
                            </td>
                        )
                    }
                    {
                        thead.includes("Успеваемость") && (
                            <td style={{ minWidth: "195px" }}><ProgressBar percent={user.progress} progressText /></td>
                        )
                    }
                    {
                        thead.includes("Успеваемость пользователя до обработки") && (
                            <td style={{ minWidth: "195px" }}><ProgressBar percent={user.beforePerformance} progressText /></td>
                        )
                    }
                    {
                        thead.includes("Успеваемость пользователя после обработки") && (
                            <td style={{ minWidth: "195px" }}><ProgressBar percent={user.afterPerformance} progressText /></td>
                        )
                    }
                    {
                        (thead.includes("Ментор") && questionnaire) && <td style={{ minWidth: "112px", textAlign: "center" }}>{user.mentor}</td>
                    }
                    {
                        thead.includes("Зачем изучать русский язык?") && (
                            <td style={{ minWidth: "171px" }}>
                                <div className={styles.reasonContainer}>
                                    {user.reason?.map((item, index) => (
                                        <p key={index} className={`${styles.coloredText} ${item === "Смотреть видео" ? styles.ink :
                                            item === "Слушать музыку" ? styles.red :
                                                item === "Читать книги" ? styles.pumpkin :
                                                    item === "Писать и понимать" ? styles.black :
                                                        item === "Изучать новые слова" ? styles.blue : ""
                                            }`}>{item}</p>
                                    ))}
                                </div>
                            </td>
                        )
                    }
                    {
                        thead.includes("Знание языка") && (
                            <td>
                                {
                                    user.knowledge === "Не знаю" ? <InternetBtnZero /> :
                                        user.knowledge === "Отлично владею" ? <InternetBtnGood /> :
                                            user.knowledge === "Знаю хорошо" ? <InternetBtnNormal /> :
                                                user.knowledge === "Понимаю немного" ? <InternetBtnSlow /> : ""
                                }
                            </td>
                        )
                    }
                    {
                        thead.includes("Навык для развития") && (
                            <td>
                                <div className={styles.developmentContainer}>
                                    {user.development?.map((item, index) => (
                                        <p key={index} className={`${styles.coloredText} ${item === "Грамматика" ? styles.ink :
                                            item === "Писать" ? styles.red :
                                                item === "Читать" ? styles.brown :
                                                    item === "Слушать" ? styles.pink : ""
                                            }`}>{item}</p>
                                    ))}
                                </div>
                            </td>
                        )
                    }
                    {
                        thead.includes("Время на занятия") && <td style={{ minWidth: "163px", textAlign: "center" }}>{user.time}</td>
                    }
                    {achievements && (thead.includes("Модуль") && (
                        <td style={{ textAlign: "center", minWidth: "100px" }}> <p className={styles.gameCount}>{user.module}</p> </td>
                    ))}
                    {achievements && (thead.includes("Блок") && (
                        <td style={{ textAlign: "center", minWidth: "100px" }}> <p className={styles.gameCount}>{user.block}</p> </td>
                    ))}
                    {achievements && (thead.includes("Урок") && (
                        <td style={{ textAlign: "center", minWidth: "100px" }}> <p className={styles.gameCount}>{user.lesson}</p> </td>
                    ))}
                    {
                        (thead.includes("Действия")) && (
                            !addButton ? (
                                <td style={{ minWidth: "161px" }}>
                                    <Actions
                                        onView={() => onView?.(user)}
                                        onDelete={() => onDelete?.(user)}
                                        onEdit={() => onEdit?.(user)}
                                        hideView={hideView}
                                    />
                                </td>
                            ) : <td style={{ minWidth: "194px" }}><MentorBtn text={buttonText || "Добавить слова"} handleClick={() => handleClick(user)} /></td>
                        )
                    }
                </tr>
                {
                    hasChildren && isExpanded && user.children.map(child => renderRow(child, level + 1))
                }
            </>
        );
    };

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}><input type="checkbox" onChange={(e) => toggleCheck(e)} /></th>
                        {
                            thead.map(item => (
                                <th key={item}>
                                    {
                                        item === "Действия" ? item : <TableButton text={item} />
                                    }
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map(user => renderRow(user))}
                </tbody>
            </table>
            <div className={styles.paginationWrapper}>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
                <button className={styles.addButton}><FaPlus /> Новый</button>
            </div>
        </div>
    );
};

export default Table;
