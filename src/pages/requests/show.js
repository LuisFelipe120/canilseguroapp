import api from "../../services/api"

export const getCanis = async () => {
    return api.get('/canis').then(res => res.data)
}

export const getCanil = async ({queryKey}) => {
    const [, { id }] = queryKey
    return api.get(`/canis/${id}`).then(res => res.data)
}

export const getComentarios = async ({ queryKey }) => {
    const [, { id }] = queryKey; // Desestrutura o ID da chave da consulta
    if (!id) {
        throw new Error("ID não fornecido para obter comentários.");
    }
    return api.get(`/comentarios/${id}`).then(res => res.data);}

    export const getRacas = async () => {
        return api.get('/racas').then(res => res.data)
    }
    
    export const getClasses = async () => {
        return api.get('/classes').then(res => res.data)
    }
    