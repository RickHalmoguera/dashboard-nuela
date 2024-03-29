
export default function ProfessorCard({ name, email, phone }: { name: string, email: string, phone: string }){
    
    const getInitials = (name: string) : string =>{
        return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('');
    }
    return(
        <div className="flex gap-4">
            <div className="bg-gradient-to-b from-gradient-top  to-gradient-bottom w-24 h-24 flex justify-center items-center font-secondary text-[40px] text-font-purple font-medium rounded-3xl">
                {getInitials(name)}
            </div>
            <div className="flex flex-col justify-between">
                <h2 className="font-primary text-2xl font-medium">{name}</h2>
                <p className="font-primary text-sm font-normal text-font-gray">{email}</p>
                <p className="font-secondary text-sm font-normal text-font-gray">{phone}</p>
            </div>
        </div>
    )
}