import { createAsyncThunk } from "@reduxjs/toolkit"
import { SubjectInterface } from "../../interfaces/SubjectInterfaces"
import subjects from "../../assets/data/subjects.json"



  export const getSubjectsListFromAPIThunk = createAsyncThunk<SubjectInterface[], void, { state: unknown, rejectValue: string }>("subjects/getSubjectsFromApi", async (): Promise<SubjectInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(subjects)
        }, 2000)
    })
})