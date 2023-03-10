import { useState } from "react"
import { Sub } from "../types"

interface FormState {
    "input": Sub
    // {
    //     "nick": string, 
    //     "months": number,
    //     "avatar": string,
    //     "description"?:string
    // }
// Esto ya lo tengo en una interface entonces lo importo y lo uso
}
interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const initialState = {
    "nick":"",
    "months": 0,
    "avatar": "",
    "description":""
}
export default function Form ({onNewSub}:FormProps){
    const [input, setInput] = useState<FormState["input"]>(initialState)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub (input)
        handleClear()
    }
    // sino pongo el tipo del e entonces no reconoce que es porque no sabe donde se está utilizando. Una clave es pasar la funcion tal cual donde se va a utilizar y de ahí en el hover puedo mirar el tipo que es, en este caso React.ChangeEvent<HTMLInputElement>

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClear = ()=>{
        setInput(initialState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="nick" value={input.nick} placeholder="nombre"/>
            <input onChange={handleChange} type="number" name="months" value={input.months} placeholder="meses"/>
            <input onChange={handleChange} type="text" name="avatar" value={input.avatar} placeholder="imagen"/>
            <textarea onChange={handleChange} name="description" value={input.description} placeholder="descripción"/>
            <button>Guardar</button>
            <button onClick={handleClear}>Cancelar</button>
            </form>
        </div>
    )
}

// En el componente Form copy encuentro como hacerlo pero utilizando reducer y custom hook