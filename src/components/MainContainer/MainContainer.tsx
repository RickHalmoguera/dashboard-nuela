import HoursContainer from "./HoursContainer";
import ProfesorContainer from "./ProfesorContainer";
import TableContainer from "./TableContainer";

export default function MainContainer(){
    return(
        <div className="flex flex-col py-8 px-12 w-full bg-gray-50">
            <ProfesorContainer/>  
            <HoursContainer/>
            <TableContainer/>
        </div>

    )
}