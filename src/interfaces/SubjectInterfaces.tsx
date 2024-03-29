export interface SubjectInterface{
    id : number,
    nombre : string,
    tipo : string,
    curso : string,
    grupo :  string,
    horas_semana : number,
    espacio_regular : string,
    es_lectiva : boolean
}

export interface SubjectsSliceInitialStateInterface{
    data: SubjectInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined
}