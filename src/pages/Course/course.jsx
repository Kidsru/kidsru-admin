import { useState } from "react";
import Filter from "../../components/Filter/filter";
import Table from "../../components/Table/table";

const Course = () => {
    const data = [
        {
            id: 'C1',
            name: 'Курс',
            status: 'Создан',
            createdAt: '06 апреля 2025',
            progress: 25,
            children: [
                {
                    id: 'M1',
                    name: 'Модуль 1',
                    status: 'В процессе',
                    createdAt: '06 апреля 2025',
                    progress: 25,
                    children: [
                        {
                            id: 'B1',
                            name: 'Блок 1. “Знакомство”',
                            status: 'Остановлен',
                            createdAt: '06 апреля 2025',
                            progress: 25,
                            children: [
                                {
                                    id: 'L1',
                                    name: 'Урок 1. “Привет”',
                                    status: 'Не начат',
                                    createdAt: '06 апреля 2025',
                                    progress: 100,
                                    children: [
                                        {
                                            id: 'G1',
                                            name: 'Игра 1. “Повторяй за мной”',
                                            status: 'Не начат',
                                            createdAt: '06 апреля 2025',
                                            progress: 50
                                        },
                                        {
                                            id: 'G2',
                                            name: 'Игра 2. “Кому какое приветствие?”',
                                            status: 'Создан',
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

    return (
        <div>
            <h3 className="title">Курс</h3>
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
                <Table itemsPerPage={10} thead={["id", "Курс", "Статус", "Дата создания", "Утвердить", "Действия"]} data={data} />
            </div>
        </div>
    )
}

export default Course