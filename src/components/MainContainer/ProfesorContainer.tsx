import ProfessorCard from "./ProfessorCard";

export default function ProfesorContainer() {
    return(
        <>
            <h1 className="text-font-black font-primary text-2xl font-medium">Profesores</h1>
            <p className="text-font-gray font-primary text-sm font-normal">Crea y gestiona los profesores</p>
            <hr className="h-px w-full my-4 bg-gray-200 border-0 dark:bg-gray-200"></hr>
            <div className="flex justify-between items-center">
                <ProfessorCard name="Marta Martínez" email="profesora123@colegio.com" phone="+34 666 555 444"/>
                <p className="text-font-nuela text-sm font-medium hover:cursor-pointer">Editar</p>
            </div>
            <hr className="h-px w-full my-4 bg-gray-200 border-0 dark:bg-gray-200"></hr>
        </>
    )
    
}