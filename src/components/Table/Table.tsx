import { BsThreeDotsVertical } from "react-icons/bs"
import { SubjectInterface } from "../../interfaces/SubjectInterfaces";

interface TableProps {
    subjectsListData: SubjectInterface[];
}

const Table: React.FC<TableProps> = ({ subjectsListData }) => {
    return(
        <table className="table-auto border border-solid border-gray-300 rounded-2xl">
            <thead>
                <tr className="h-12 bg-table-thead ">
                    <th className="font-primary text-table-th font-normal text-sm ">Nombre</th>
                    <th className="font-primary text-table-th font-normal text-sm">Tipo</th>
                    <th className="font-primary text-table-th font-normal text-sm">Curso</th>
                    <th className="font-primary text-table-th font-normal text-sm">Grupo</th>
                    <th className="font-primary text-table-th font-normal text-sm">Horas semana</th>
                    <th className="font-primary text-table-th font-normal text-sm">Espacio Regular</th>
                    <th className="font-primary text-table-th font-normal text-sm">Acciones</th>
                </tr>    
            </thead>
            <tbody>
                {subjectsListData.map((subject)=>(
                    <tr  className="h-12 text-center bg-white border-solid border border-gray-300" key={subject.id}>
                        <td >{subject.nombre}</td>
                        <td >{subject.tipo}</td>
                        <td >{subject.curso}</td>
                        <td >{subject.grupo}</td>
                        <td >{subject.horas_semana} h</td>
                        <td >{subject.espacio_regular}</td>
                        <td className=" h-12 flex items-center justify-center"><BsThreeDotsVertical/></td>
                    </tr>    

                ))}
            </tbody>  
        </table>
    )

}
export default Table;