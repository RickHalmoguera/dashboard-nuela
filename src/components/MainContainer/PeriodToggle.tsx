
export default function PeriodToggle(){
    return(
        <div className="w-[238px] h-12 bg-toggle-gray flex justify-center items-center rounded-lg">
            <label className="flex items-center p-2 rounded-md cursor-pointer text-font-black text-center">
                <input type="checkbox" className="hidden peer" />
                <span className="px-4 py-2 w-28 rounded-l-md bg-white peer-checked:bg-toggle-gray">Semanal</span>
                <span className="px-4 py-2 w-28 rounded-r-md bg-toggle-gray peer-checked:bg-white">Anual</span>
            </label>
        </div>
        )

}