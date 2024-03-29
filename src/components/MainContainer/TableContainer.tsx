import AddBtn from "../Table/AddBtn"
import Table from "../Table/Table"
import { useState, useEffect } from "react"
import { useAppDispatch,useAppSelector } from "../../app/store"
import { getSubjectsData,getSubjectsStatus,getSubjectsError } from "../../app/features/subjectsSlice"
import { getSubjectsListFromAPIThunk } from "../../app/features/subjectsThunk"
import ClimbingBoxLoader from "react-spinners/ClipLoader"
import { SubjectInterface } from "../../interfaces/SubjectInterfaces"
import TableFilter from "../Table/TableFilter"
import { toast } from "react-toastify"


export default function TableContainer(){
    const dispatch = useAppDispatch()
    const subjectsListData = useAppSelector(getSubjectsData)
    const subjectsListError = useAppSelector(getSubjectsError)
    const subjectsListStatus = useAppSelector(getSubjectsStatus)
    const [spinner, setSpinner] = useState(true)
    const [filteredSubjectsList, setFilteredSubjectsList] = useState<SubjectInterface[]>([])
    const [isFiltered, setIsFiltered] = useState(true)

    const handleFilter =()=>{
        setIsFiltered(prevIsFiltered => !prevIsFiltered)
    }
    useEffect(() => {
        if (subjectsListStatus === "idle") {
            dispatch(getSubjectsListFromAPIThunk());
        } else if (subjectsListStatus === "pending") {
            setSpinner(true);
        } else if (subjectsListStatus === "fulfilled") {
            setFilteredSubjectsList(subjectsListData.filter(subject => subject.es_lectiva === isFiltered))
            setSpinner(false)
        }else if( subjectsListStatus === "rejected"){
            setSpinner(false)
            toast(subjectsListError, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        }
        
    }, [dispatch, subjectsListData, subjectsListStatus, isFiltered,subjectsListError]);
    return(
        <div className="flex flex-col gap-4">  
            <TableFilter handleFilter={handleFilter}/>
            <AddBtn/>     
            { spinner? 
                <ClimbingBoxLoader className="mx-auto my-20" color="#635BFF" /> 
                : <Table subjectsListData={filteredSubjectsList}/> 
            }
        </div>
    )
} 