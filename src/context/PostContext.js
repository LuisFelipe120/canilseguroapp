import { createContext, useContext, useState } from "react"
import api from "../services/api"


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

const initialRace = {
    id: 0,
    canilEmail: '',
    nome: '',
    grupo: ''
};
 
const ContextGlobal = createContext(undefined);


//contextCanil

const ContextGlobalProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [ canis, setCanis] = useState([]);

    const [logado, setLogado] = useState(false);

    const addUser = (users) => {
        console.log(users)
        // const formData = new FormData(post);
        // sem imagem
        const fetchUser = async () => {await api.post('/usuarios', users)}
        // const formData = new FormData();
        // formData.append('user', JSON.stringify(user));
        // formData.append('file', user.file);
        // const fetchUser = async() => {await api.('/usuarios', formData)}
        fetchUser();
        // setUsers([...users, user]);
    }

    //contextCanil
        const addCanil = (canil) => {
             const formData = new FormData();
        formData.append('canil', JSON.stringify(canil));
        formData.append('file', canil.file);
        const fetchCanil = async() => {await api.post('/canis', formData)}
        fetchCanil()
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

    const removeRace = (id) => {
        const index = races.findIndex(race => race?.id === id);
        if (index !== -1) {
            setRaces([
                ...races.slice(0, index),
                ...races.slice(index + 1, races.length)
            ]);
        }
    };

 
   
    return <ContextGlobal.Provider value={{users, addUser, canis, addCanil ,removeUser, removeCanil, logado, setLogado }}>
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
    initialRace,
    ContextGlobalProvider,
    useContextGlobal,
}

