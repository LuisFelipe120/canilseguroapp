import { createContext, useContext, useState  } from "react"
import api from "../service/api"

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

const initialRace = {
    id: 0,
    canilEmail: '',
    nome: '',
    grupo: ''
};
 
const ContextGlobal = createContext(undefined);

//contextCanil


 
const ContextGlobalProvider = ({ children }) => {
    const [users, setUsers] = useState(userInitial);
    const [ canis, setCanis] = useState(canilInitial);
    const [races, setRaces] = useState(initialRace); // Estado para raças
    const [logado, setLogado] = useState(false)

    const addUser = (user) => {
        setUsers([...users, user]);
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

    const addRace = (race) => {
        setRaces([...races, race]);
    };

 
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

 
   
    return <ContextGlobal.Provider value={{users, addUser, canis, addCanil, removeUser, removeCanil, races, addRace, removeRace, logado, setLogado}}>
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

