import { useReducer, useState } from "react"
import useNewSub from "../hooks/useNewSub"
import { Sub } from "../types"


interface FormProps {
    onNewSub: (newSub: Sub) => void
}

export default function Form ({onNewSub}:FormProps){

    const [input, dispatch] = useNewSub()
    //Así con el reducer sin custom hooks
    //const [input, dispatch] = useReducer (reducer, initialState)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub (input)
        handleClear()
        // o puedo utilizar dispatch ...

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({
            type: "CAMBIAR_ESTADO",
            payload:{
                inputName:e.target.name,
                inputValue: e.target.value
            }
        })
    }

    const handleClear = ()=>{
        dispatch({
            type:"CLEAR"
        })
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