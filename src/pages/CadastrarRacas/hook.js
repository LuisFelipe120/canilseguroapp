import { useQuery } from "react-query"
// import { useNavigate } from "react-router-dom"
import {getClasses, getRacas } from "../../pages/requests/show"


export const useRacasList = () => {
    const { data: racas} = useQuery(['getRacas',], getRacas,)
    const { data: classes } = useQuery(
        ['getClasses', ] , getClasses)


  

    

    return {
        racas,
        classes,        
    }
}