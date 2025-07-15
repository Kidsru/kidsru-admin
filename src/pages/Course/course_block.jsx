import Filter from "../../components/Filter/filter";
import Table from "../../components/Table/table";

const Course_block = () => {
    const data = [
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
    ];
    return (
        <div>
            <h3 className="title">Курс / Блок</h3>
            <div className="wrapper">
                <Filter />
                <Table itemsPerPage={10} thead={["id", "Блок", "Статус", "Дата создания", "Утвердить", "Действия"]} data={data} />
            </div>
        </div>
    )
}

export default Course_block