import Filter from "../../components/Filter/filter";
import Table from "../../components/Table/table";

const Course_module = () => {
    const data = [
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
    ];
    return (
        <div>
            <h3 className="title">Курс / Модуль</h3>
            <div className="wrapper">
                <Filter />
                <Table itemsPerPage={10} thead={["id", "Модуль", "Статус", "Дата создания", "Утвердить", "Действия"]} data={data} />
            </div>
        </div>
    )
}

export default Course_module