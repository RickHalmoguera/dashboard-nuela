
export default function TableFilter(){
    return(
        <div className="flex justify-start items-center">
            <label className="flex items-center p-2 cursor-pointer text-font-black text-center">
                <input type="checkbox" className="hidden peer" />
                <span className="px-4 py-2 mr-6  text-font-nuela border-font-nuela border-b-2  peer-checked:text-font-gray text-center peer-checked:border-b-2 peer-checked:border-transparent">Horas lectivas</span>
                <span className="px-4 py-2 text-font-gray border-b-2 border-transparent peer-checked:text-font-nuela text-center peer-checked:border-b-2 peer-checked:border-font-nuela">Horas complementarias</span>
            </label>
        </div>
        )

}
