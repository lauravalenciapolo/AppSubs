import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
    input: Sub // o "input"
}

const initialState = {
    "nick":"",
    "months": 0,
    "avatar": "",
    "description":""
}

type reducerActions = {
    type: "CAMBIAR_ESTADO",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "CLEAR"
}

// Para hacer esto mismo con interface 

const reducer = (state : FormState["input"], action: reducerActions) =>{
    switch(action.type){
        case "CAMBIAR_ESTADO":
            return {
                ...state,
                [action.payload.inputName] : action.payload.inputValue
            }
        case "CLEAR":
            return initialState
            //No puedo return {initialState}
    }
}

const useNewSub = () => {
    return useReducer (reducer, initialState)
}

export default useNewSub