import api from "../../services/api"

export const getCanis = async () => {
    return api.get('/canis').then(res => res.data)
}

export const getCanil = async ({queryKey}) => {
    const [, { id }] = queryKey
    return api.get(`/canis/${id}`).then(res => res.data)
}