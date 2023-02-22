import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

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
 subs: Array <Sub>
}
interface Sub {
    "nick": string, 
    "months": number,
    "avatar": string,
    "description"?:string
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

  const [subs, setSubs] = useState(initialState)

  return (
    <div className="App">
      {/* {number}
      <button onClick={changeNumber}>Cambiar numero</button> */}
      <h1>SUBSCRIPTORES</h1>
      <List subs={subs}/>
      <Form/>
    </div>
  );
}

export default App;
