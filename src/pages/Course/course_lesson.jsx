import Filter from "../../components/Filter/filter";
import Table from "../../components/Table/table";

const Course_lesson = () => {
    const data = [
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
            ]
        }
    ];
    return (
        <div>
            <h3 className="title">Курс / Урок</h3>
            <div className="wrapper">
                <Filter />
                <Table itemsPerPage={10} thead={["id", "Урок", "Статус", "Дата создания", "Утвердить", "Действия"]} data={data} />
            </div>
        </div>
    )
}

export default Course_lesson