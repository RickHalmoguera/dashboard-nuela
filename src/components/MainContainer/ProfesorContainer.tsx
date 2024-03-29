import ProfessorCard from "./ProfessorCard";

export default function ProfesorContainer() {
    return(
        <>
            <h1 className="text-gray-950 font-primary text-2xl font-medium">Profesores</h1>
            <p className="text-gray-500 font-primary text-sm font-normal">Crea y gestiona los profesores</p>
            <hr className="h-px w-full my-4 bg-gray-200 border-0 dark:bg-gray-200"></hr>
            <ProfessorCard/>
        </>
    )
    
}