import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';

function App() {
  const [newTech, setNewTech] = useState('');
  const [techs, setTechs] = useState([]);
  const techsSize = useMemo(() => techs.length, [techs]);

  useEffect(() => {
    const techs = JSON.parse(localStorage.getItem('techs'));

    if (techs) {
      setTechs(techs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [newTech, techs]);

  return (
    <>
      <ul>
        { techs.map(tech => (
          <li key={ tech }>{ tech }</li>
        )) }
      </ul>

      <p><strong>Você tem { techsSize } tecnologias.</strong></p>

      <input type="text" value={ newTech } onChange={ ({ target }) => setNewTech(target.value) } />

      <button type="button" onClick={ handleAdd }>Adicionar</button>
    </>
  );
}

export default App;
