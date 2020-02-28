import React from 'react';
import ProtoTypes from 'prop-types'

const Cita = ({ cita , dropCita}) => (
    <div className="cita">
        <p>Nombre: <span>{cita.nombre}</span></p>
        <p>Apellido: <span>{cita.apellido}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Motivos: <span>{cita.motivos}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick= {()=> dropCita(cita.id)}
        >Eliminar &times;</button>
    </div>
);

Cita.protoType = {
    cita: ProtoTypes.object.isRequired,
    dropCita: ProtoTypes.func.isRequired
}


export default Cita;