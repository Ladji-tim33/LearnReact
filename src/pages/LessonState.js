import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function LessonState() {
  const [code, setCode] = useState('// Utilisez useState pour gérer l\'état ici\n');

  const handleSubmit = () => {
    if (code.includes('useState') && code.includes('setState')) {
      alert('Bravo! Vous avez utilisé useState correctement.');
    } else {
      alert('Veuillez vérifier votre code.');
    }
  };

  return (
    <div>
      <h1>Leçon : États dans React</h1>
      <p>Les états sont utilisés pour stocker des informations qui changent au fil du temps.</p>
      <h2>Exemple :</h2>
      <pre>
        {`
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
        `}
      </pre>
      <h2>Exercice :</h2>
      <p>Essayez de créer un composant qui utilise useState pour gérer l'état d'un compteur.</p>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript()]}
        onChange={(value, viewUpdate) => {
          setCode(value);
        }}
      />
      <button onClick={handleSubmit}>Soumettre</button>
    </div>
  );
}

export default LessonState;
