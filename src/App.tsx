import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub, SubsResponseApi } from './types';

const initialState = [{
  "nick":"David",
  "months": 7,
  "avatar": "https://i.pravatar.cc/150?u=David",
  "description": "Full stack developer"
},{
  "nick":"Daniela",
  "months": 27,
  "avatar": "https://i.pravatar.cc/150?u=Daniela",
}] 

// Puedo definir una interface para todos los estados que tendrá el componente
interface AppState {
 subs: Array <Sub>,
 newSubsNumber: number
}

// Y se utilizaría ... useState<AppState["subs"]>([])
// Esta interface como es de logica de negocio, es mejor ponerla en una archivo aparte y no dejarla en el componente types.d.ts

function App() {

  //Se define el type dentro de <>
  // const [number, setNumber] = useState<number>(5)
  // const changeNumber = ()=>{
  //   setNumber(2)
  // }

  //Si quiero inicializar con estado vacío
  // interface Sub {
  //   "nick": string, 
  //   "months": number,
  //   "avatar": string,
  //   "description"?:string
  // }
  // const [subs, setSubs] = useState<Array<Sub>>([])

  //const [subs, setSubs] = useState(initialState) Puede hacerse así porque al inicializar el estado estoy definiend sus tipos
  const [subs, setSubs] = useState<AppState["subs"]>(initialState)
  const [newSubsNumber, setNewSubsNumber] = useState <AppState["newSubsNumber"]>(0)

  useEffect(()=>{
    const fetchSubs = async () :Promise<AppState["subs"]> =>{
      const res = await fetch("https://...");
      return await res.json();
      // Si lo quiero hacer con axios puedo tiparlo en la funcion asyn 
      // const res = await axios.get("https://...");
      // return await res.data;
      // o se puede tipar 
      // const res = await axios.get<AppState["subs"]>("https://...");
      // return await res.data;
    }
    fetchSubs()
    // .then (setSubs) se puede hacer así tambien porque la respuesta de fetchSubs lo toma como el argumento de setSubs
    .then(res=>{
      return setSubs(res)
    }) 
  })
  // si quiero usar useRef es mejor inicializarlo 
  // const divRef = useRef<HTMLDivElement>(null)
  // Para usarlos en el elemento div 
  // <div ref={divRef}>

  const handlenewSub = (newSub:Sub): void =>{
    setSubs(subs=> [...subs,newSub])
  }

  return (
    <div className="App">
      {/* {number}
      <button onClick={changeNumber}>Cambiar numero</button> */}
      <h1>SUBSCRIPTORES</h1>
      <List subs={subs}/>
      <Form onNewSub={handlenewSub}/>
    </div>
  );
}

export default App;
