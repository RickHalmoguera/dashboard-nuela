
export default function HoursCard({hourType, amount} : {hourType: string, amount: string} ){
    return(
        <div className="w-[343px] h-[105px] bg-white rounded-[20px] flex flex-col justify-between items-start p-4">
            <p className="font-primary font-medium text-sm text-gray-700">Horas {hourType}</p>
            <p className="font-primary font-bold text-font-black text-3xl" >{amount} horas</p>
        </div>
    )
}