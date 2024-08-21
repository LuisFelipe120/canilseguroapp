import { useQuery } from "react-query"
// import { useNavigate } from "react-router-dom"
import { getCanis } from "../../pages/requests/show"
import { useNavigate } from "react-router-dom";

export const useCanisList = () => {
    const { data: canis, isLoading} = useQuery(['getCanis'], getCanis)
    const navigate = useNavigate();

    const handleClickDetails = (id) => {
        navigate(`/canis/${id}`)
    }
    return {
        isLoading,
        canis,
        handleClickDetails
    }
}