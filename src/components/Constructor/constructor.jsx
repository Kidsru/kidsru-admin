import { useState } from "react"
import Filter from "../Filter/filter"
import Table from "../Table/table"

const Constructor = () => {
    const data = [
        {
            id: "T1",
            name: "Тип 1. Запись голоса пользователя",
            createdAt: '06 апреля 2025',
            children: [
                {
                    id: "T1.0",
                    name: "Тип 1.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
                {
                    id: "T1.0",
                    name: "Тип 1.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
                {
                    id: "T1.0",
                    name: "Тип 1.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
                {
                    id: "T1.0",
                    name: "Тип 1.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
            ]
        },
        {
            id: "T2",
            name: "Тип 2. Запись голоса пользователя",
            createdAt: '06 апреля 2025',
            children: [
                {
                    id: "T2.0",
                    name: "Тип 2.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
                {
                    id: "T1.0",
                    name: "Тип 1.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
                {
                    id: "T1.0",
                    name: "Тип 1.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
                {
                    id: "T1.0",
                    name: "Тип 1.0. Запись голоса пользователя",
                    createdAt: '06 апреля 2025',
                },
            ]
        }
    ]
    const handleClick = () => {
        console.log("k")
    }

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
            <h2 className="title">Конструктор</h2>
            <div className="wrapper">
                <Filter onInputChange={setInputValue} number={filteredData.length} />
                <Table
                    itemsPerPage={10}
                    thead={["id", "Тип", "Дата создания", "Действия"]}
                    data={filteredData}
                    addButton={true}
                    buttonText={"Создать"}
                    handleClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Constructor