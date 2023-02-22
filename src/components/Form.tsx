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

export default function Form (){
    const [input, setInput] = useState<FormState["input"]>({
        "nick":"",
        "months": 0,
        "avatar": "",
        "description":""
    })
    const handleSubmit = () => {

    }
    // sino pongo el tipo del e entonces no reconoce que es porque no sabe donde se está utilizando. Una clave es pasar la funcion tal cual donde se va a utilizar y de ahí en el hover puedo mirar el tipo que es, en este caso React.ChangeEvent<HTMLInputElement>

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handelChange} type="text" name="nick" value={input.nick} placeholder="nombre"/>
            <input onChange={handelChange} type="number" name="months" value={input.months} placeholder="meses"/>
            <input onChange={handelChange} type="text" name="avatar" value={input.avatar} placeholder="imagen"/>
            <textarea onChange={handelChange} name="description" value={input.description} placeholder="descripción"/>
            <button>Guardar</button>
            </form>
        </div>
    )
}