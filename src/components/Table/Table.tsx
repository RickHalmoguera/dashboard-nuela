import { BsThreeDotsVertical } from "react-icons/bs"

export default function Table(){
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
                <tr  className="h-12 text-center bg-white border-solid border border-gray-300">
                    <td >Matematicas</td>
                    <td >Obligatoria</td>
                    <td >1° Bachillerato</td>
                    <td >B</td>
                    <td >5 h</td>
                    <td >1° Bach - Grupo B</td>
                    <td className=" h-12 flex items-center justify-center"><BsThreeDotsVertical/></td>
                </tr>    
            </tbody>  
         
        </table>
    )

}