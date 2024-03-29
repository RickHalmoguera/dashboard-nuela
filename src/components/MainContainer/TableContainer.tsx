import AddBtn from "../Table/AddBtn";
import Table from "../Table/Table";
import TableFilter from "../Table/TableFilter";

export default function TableContainer(){
    return(
        <div className="flex flex-col gap-4">  
            <TableFilter/>
            <AddBtn/>     
            <Table/>
        </div>
    )
}