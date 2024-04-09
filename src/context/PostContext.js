import { createContext, useContext, useState } from "react"

const userInitial = [
    {id: 1, nome: 'admin', senha: '1234', cpf: '000.000.000-00', numero:'(00) 00000-0000'}
]
 
 
const initialUser = {
    id: 0,
    nome: '',
    senha: '',
    cpf: '',
    numero: ''
}
 
const contextGlobal = createContext(undefined);
 
const contextGlobalProvider = ({ children }) => {
    const [users, setUsers] = useState(userInitial);
 
    const addUser = (user) => {
        setUsers([...users, user]);
    }

const removeUser =(id) =>{
        const index = users.findIndex(user => user?.id === id);
        if(index !== -1){
            setUsers([
                ...users.slice(0 ,index),
                ...users.slice(index+1, users.length)
        ]) }
    }

   
    return <contextGlobal.Provider value={{users, addUser, removeUser}}>
        {children}
    </contextGlobal.Provider>;
}
 
const useContextGlobal = () => {
    const context = useContext(contextGlobal);
    if(!context) {
        throw new Error('useContextGlobal deve ser usado dentro de um contextGlobal')
    }
    return context;
}
 
export {
    initialUser,
    contextGlobalProvider,
    useContextGlobal
}