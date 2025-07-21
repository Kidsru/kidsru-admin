import { useState } from "react";
import Filter from "../../components/Filter/filter";
import Table from "../../components/Table/table";

const Course_game = () => {
    const data = [
        {
            id: 'G1',
            name: 'Игра 1. “Повторяй за мной”',
            status: 'Создан',
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
        {
            id: 'G5',
            name: 'Игра 1. “Повторяй за мной”',
            status: 'Создан',
            createdAt: '06 апреля 2025',
            progress: 50
        },
        {
            id: 'G3',
            name: 'Игра 2. “Кому какое приветствие?”',
            status: 'Не начат',
            createdAt: '06 апреля 2025',
            progress: 0
        },
    ];

    const [inputValue, setInputValue] = useState("");

    const filteredData = data.filter((user) => {
        const lower = inputValue.toLowerCase();
        return (
            user.name.toLowerCase().includes(lower) ||
            user.id.toString().includes(lower)
        );
    });

    return (
        <div>
            <h3 className="title">Курс / Игра</h3>
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
                <Table itemsPerPage={10} thead={["id", "Игра", "Статус", "Дата создания", "Утвердить", "Действия"]} data={filteredData} />
            </div>
        </div>
    )
}

export default Course_game