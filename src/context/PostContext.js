import { createContext, useContext, useState  } from "react"

const userInitial = [
    {id: 1, nome: 'admin', email:'admin@gmail.com' ,senha: '1234', cpf: '000.000.000-00', numero:'(00) 00000-0000'}
]
 
 //contextCanil

 const canilInitial =[{id:1, nome:'adminCanil', email:'adminCanil@gmail.com', endereco: '0000-000', mensagem:'canil seguro' }]



const initialUser = {
    id: 0,
    nome: '',
    email:'',
    senha: '',
    cpf: '',
    numero: ''
}

//contextCanil

const initalCanil={
    id:0,
    nome:'',
    email:'',
    endereco:'',
    mensagem:'',
    img:null,

}
 
const ContextGlobal = createContext(undefined);

//contextCanil


 
const ContextGlobalProvider = ({ children }) => {
    const [users, setUsers] = useState(userInitial);
    const [ canis, setCanis] = useState(canilInitial);
 
    const addUser = (user) => {
        setUsers([...users, user]);
    }

    //contextCanil
        const addCanil = (canil) => {
            setCanis([...canis, canil]);
        }

 
const removeUser =(id) =>{
        const index = users.findIndex(user => user?.id === id);
        if(index !== -1){
            setUsers([
                ...users.slice(0 ,index),
                ...users.slice(index+1, users.length)
        ]) }
    }

    //contextCanil

    const removeCanil =(id) =>{
        const index = canis.findIndex(canil => canil?.id === id);
        if(index !== -1){
            setCanis([
                ...canis.slice(0 ,index),
                ...canis.slice(index+1, canis.length)
        ]) }
    }

 
   
    return <ContextGlobal.Provider value={{users, addUser, canis, addCanil ,removeUser, removeCanil}}>
        {children}
    </ContextGlobal.Provider>;
}


 
const useContextGlobal = () => {
    const context = useContext(ContextGlobal);
    if(!context) {
        throw new Error('useContextGlobal deve ser usado dentro de um contextGlobal')
    }
    return context;
}


 
export {
    initialUser,
    initalCanil,
    ContextGlobalProvider,
    useContextGlobal,
}

