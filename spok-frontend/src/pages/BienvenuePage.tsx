import {useState} from "react";

export function BienvenuePage() {
  const [count, setCount] = useState(0);

  return (
  <>
  <p>Bienvenue sur mon app de gestion d'utilisateurs</p>;
  Compteur : {count}
  <button onClick={() => setcount(count + 1 )}>+1</button>
  </>;
 );
}