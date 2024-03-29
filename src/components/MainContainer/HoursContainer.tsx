import HoursCard from "./HoursCard";
import PeriodToggle from "./PeriodToggle";

export default function HoursContainer(){

    return(

        <div className="flex flex-col items-center justify-between">
            <PeriodToggle/>
            <div className="flex justify-center gap-6 flex-wrap">
                <HoursCard hourType="totales" amount="22"/>
                <HoursCard hourType="lectivas" amount="18"/>
                <HoursCard hourType="complementarias" amount="4"/>
            </div>
            <hr className="h-px w-full my-4 bg-gray-200 border-0 dark:bg-gray-200"></hr>
        </div>
    )
}