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
    return (
        <div>
            <h2 className="title">Конструктор</h2>
            <div className="wrapper">
                <Filter />
                <Table
                    itemsPerPage={10}
                    thead={["id", "Тип", "Дата создания", "Действия"]}
                    data={data}
                    addButton={true}
                    buttonText={"Создать"}
                    handleClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Constructor