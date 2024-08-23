import { useQuery } from "react-query"
// import { useNavigate } from "react-router-dom"
import { getCanis, getComentarios } from "../../pages/requests/show"
import { useNavigate } from "react-router-dom";

export const useCanisList = () => {
    const { data: canis, isLoading : canisLoading} = useQuery(['getCanis',], getCanis,)
    const navigate = useNavigate();

    const handleClickDetails = (id) => {
        navigate(`/canis/${id}`)
    }

    const { data: comentarios, isLoading: comentariosLoading } = useQuery(
        ['getComentarios', ] , getComentarios)

    return {
        canis,
        comentarios,
        canisLoading,
        comentariosLoading,
        handleClickDetails,
        
    }
}