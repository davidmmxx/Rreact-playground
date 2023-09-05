import {TextComponent} from "./components/TextComponent";
import { useState} from "react";

function App() {
    const [name, setName] = useState('2222');
  return (
    <>
        {name}
        <TextComponent text={'Moj text'}/>
        <button onClick={() => setName('321')}>Reverse</button>
    </>
  );
}

export default App;
