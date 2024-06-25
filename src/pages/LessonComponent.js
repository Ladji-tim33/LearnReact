import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function LessonComponent() {
  const [code, setCode] = useState('// Créez un composant fonctionnel React ici\n');

  const handleSubmit = () => {
    // Simple validation du code soumis
    if (code.includes('function') && code.includes('Bonjour, monde')) {
      alert('Bravo! Vous avez créé un composant fonctionnel.');
    } else {
      alert('Veuillez vérifier votre code.');
    }
  };

  return (
    <div>
      <h1>Leçon : Composants fonctionnels</h1>
      <p>Les composants fonctionnels sont des fonctions JavaScript qui retournent des éléments React. Ils sont utilisés pour créer des composants réutilisables dans une application React.</p>
      <h2>Exemple :</h2>
      <pre>
        {`
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
        `}
      </pre>
      <h2>Exercice :</h2>
      <p>Essayez de créer un composant fonctionnel qui affiche "Bonjour, monde!"</p>
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

export default LessonComponent;
