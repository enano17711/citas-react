import React from "react"
import Paciente from "./Paciente.jsx"

const ListadoPacientes = () => {
    return (
        <div className="overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
            <h2 className="text-center text-3xl font-black">Listado de Pacientes</h2>
            <p className="mt-5 mb-10 text-center text-xl">
                Administra tus <span className="font-bold text-indigo-600">Paciente y Citas</span>
            </p>
            <Paciente />
            <Paciente />
            <Paciente />
        </div>
    )
}

export default ListadoPacientes
