import { useNavigate } from "react-router-dom";
import Filter from "../../Filter/filter";
import Table from "../../Table/table";
import { useState } from "react";

const Dictionary = () => {
    const data = [
        {
            id: 'C1',
            name: 'Курс',
            status: 'В процессе',
            createdAt: '06 апреля 2025',
            progress: 25,
            children: [
                {
                    id: 'M1',
                    name: 'Модуль 2',
                    status: 'В процессе',
                    createdAt: '06 апреля 2025',
                    progress: 25,
                    children: [
                        {
                            id: 'B1',
                            name: 'Блок 1. “Знакомство”',
                            status: 'В процессе',
                            createdAt: '06 апреля 2025',
                            progress: 25,
                            children: [
                                {
                                    id: 'L1',
                                    name: 'Урок 1. “Привет”',
                                    status: 'Создан',
                                    createdAt: '06 апреля 2025',
                                    progress: 100,
                                    children: [
                                        {
                                            id: 'G1',
                                            name: 'Игра 1. “Повторяй за мной”',
                                            status: 'Остановлен',
                                            createdAt: '06 апреля 2025',
                                            progress: 50
                                        },
                                        {
                                            id: 'G2',
                                            name: 'Игра 2. “Кому какое приветствие?”',
                                            status: 'Не начат',
                                            createdAt: '06 апреля 2025',
                                            progress: 0
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'M5',
                    name: 'Модуль 4',
                    status: 'В процессе',
                    createdAt: '06 апреля 2025',
                    progress: 25,
                    children: [
                        {
                            id: 'B1',
                            name: 'Блок 5. “Знакомство”',
                            status: 'В процессе',
                            createdAt: '06 апреля 2025',
                            progress: 25,
                            children: [
                                {
                                    id: 'L2',
                                    name: 'Урок 8. “Привет”',
                                    status: 'Создан',
                                    createdAt: '06 апреля 2025',
                                    progress: 100,
                                    children: [
                                        {
                                            id: 'G1',
                                            name: 'Игра 1. “Повторяй за мной”',
                                            status: 'Остановлен',
                                            createdAt: '06 апреля 2025',
                                            progress: 50
                                        },
                                        {
                                            id: 'G2',
                                            name: 'Игра 2. “Кому какое приветствие?”',
                                            status: 'Не начат',
                                            createdAt: '06 апреля 2025',
                                            progress: 0
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    const filterNestedData = (items, search) => {
        return items
            .map((item) => {
                const lower = search.toLowerCase();

                const match =
                    item.name?.toLowerCase().includes(lower) ||
                    item.status?.toLowerCase().includes(lower) ||
                    item.id?.toString().includes(lower);

                let filteredChildren = [];
                if (item.children) {
                    filteredChildren = filterNestedData(item.children, search);
                }

                if (match || filteredChildren.length > 0) {
                    return {
                        ...item,
                        children: filteredChildren.length > 0 ? filteredChildren : item.children,
                    };
                }

                return null;
            })
            .filter(Boolean);
    };

    const [inputValue, setInputValue] = useState("");
    const filteredData = filterNestedData(data, inputValue);

    const addParents = (node, parent = null) => {
        node.parent = parent;
        if (node.children) {
            node.children.forEach(child => addParents(child, node));
        }
    };
    data.forEach(d => addParents(d));

    const navigate = useNavigate();

    const handleClick = (user) => {
        const path = [];
        const extractPath = (item) => {
            path.unshift(item);
            if (item.parent) extractPath(item.parent);
        };
        extractPath(user);

        const ids = {};
        const titles = [];

        for (const item of path) {
            if (item.id.startsWith("C")) {
                ids.courseId = item.id;
                titles.push(item.name);
            } else if (item.id.startsWith("M")) {
                ids.moduleId = item.id;
                titles.push(item.name);
            } else if (item.id.startsWith("B")) {
                ids.blockId = item.id;
                titles.push(item.name);
            } else if (item.id.startsWith("L")) {
                ids.lessonId = item.id;
                titles.push(item.name);
            } else if (item.id.startsWith("G")) {
                ids.gameId = item.id;
                titles.push(item.name);
            }
        }

        navigate("/mainBlocks/dictionary/addWords", {
            state: {
                breadcrumb: titles.join(" / ")
            }
        });
    };

    return (
        <div>
            <h3 className="title2">Словарь</h3>
            <div className="wrapper">
                <Filter
                    onInputChange={setInputValue}
                    number={filteredData.length}
                    filterField={{
                        key: "status",
                        label: "Статус",
                        options: ["В процессе", "Создан", "Остановлен", "Не начат"],
                    }}
                />
                <Table
                    itemsPerPage={10}
                    thead={["id", "Курс", "Статус", "Дата создания", "Действия"]}
                    data={filteredData}
                    addButton={true}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};


export default Dictionary