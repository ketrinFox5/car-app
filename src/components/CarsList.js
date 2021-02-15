import { Table } from "react-bootstrap";



function CarsList (props)  {


    return(
        <div>
            <h1>{props.title}</h1>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Модель машины
                        </th>
                        <th>
                            Номер машины
                        </th>
                        <th>
                            Регион
                        </th>
                        <th>
                            Проблема
                        </th>
                        <th>
                            ФИО владельца
                        </th>
                        <th>
                            Контакты
                        </th>
                        <th>
                            Статус
                        </th>
                    </tr>
                </thead>
                <tbody>
                {props.content.map(item => (
                    <tr>
                        <td>
                            {item.carModel}
                        </td>
                        <td>
                            {item.carNumber}
                        </td>
                        <td>
                            {item.region}
                        </td>
                        <td>
                            {item.problem}
                        
                        </td>
                        <td>
                            {item.userName}
                        </td>
                        <td>
                            {item.userPhone}
                        </td>
                        <td>
                            {item.isCompleted === false ? (
                               <button onClick={() => props.handleComplete(item.carNumber)} className="btn btn-primary">
                               Завершить
                           </button>
                            ) : (
                                <p>
                                    Завершено
                                </p>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CarsList;