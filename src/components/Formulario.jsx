import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'
import ProtoTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    const [error, updError] = useState(false)

    const [cita, updCita] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        hora: '',
        motivos: ''
    })

    //recuperar info
    const handleChange = e => {
        updCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //extraer datos
    const { nombre, apellido, fecha, hora, motivos } = cita;

    const submitCita = (e) => {
        e.preventDefault();

        //validar
        if (nombre.trim() === '' || apellido.trim() === '' || motivos === '' || fecha === '' || hora === '') {
            updError(true);
            return;
        }
        updError(false)

        //asignar id
        cita.id = uuid();

        //crear cita
        crearCita(cita)

        //reiniciar form
        updCita(
            { nombre: '',
            apellido: '',
            fecha: '',
            hora: '',
            motivos: ''}
        );

    }

    return (
        <Fragment>
            <h2>Crear citas</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitCita}>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre paciente"
                    onChange={handleChange}
                    value={nombre}
                />
                <label>Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    className="u-full-width"
                    placeholder="Apellido paciente"
                    onChange={handleChange}
                    value={apellido}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Motivo</label>
                <textarea
                    name="motivos"
                    className="u-full-width"
                    onChange={handleChange}
                    value={motivos}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Guardar</button>
            </form>
        </Fragment>
    );
}
Formulario.protoType = {
    crearCita: ProtoTypes.func.isRequired
}


export default Formulario;