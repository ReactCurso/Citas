import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita';
function App() {


  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, saveCitas] = useState(citasIniciales);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const crearCita = cita => {
    saveCitas([...citas,
      cita
    ]);
  }


  const dropCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    saveCitas(nuevasCitas);
  }


  const title = citas.length === 0 ? 'No hay citas' : 'Administrar citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h1>{title}</h1>
            {citas.map(cita => <Cita key={cita.id} cita={cita} dropCita={dropCita} />)}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
