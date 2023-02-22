import { Sub } from "../types";
//Las props les debo asignar el type porque o si no quedan como any y no tienen sentido
interface Props{
    //si quiero que las props acepten children simplemente:
    // "children":JSX.Element [], o  React.ReactNode
    "subs": Array<
    // {
        // "nick": string, 
        // "months": number,
        // "avatar": string,
        // "description"?:string   
    // }
    // Esto ya lo tengo en una interface entonces lo importo y lo uso
    Sub>
}

export default function List({subs}:Props) {
  return (
    <ul>
      {subs.map((e) => {
        return (
          <li key={e.nick}>
            <img src={e.avatar} alt={`Imagen de ${e.nick}`} />
            <h4>
              Nombre: {e.nick} (<small>{e.months}</small>)
            </h4>
            <p>{e.description?.substring(0, 10)}</p>
          </li>
        );
      })}
    </ul>
  );
}
