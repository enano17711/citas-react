const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm("esta seguro de eliminar este paciente?")
        if (respuesta) eliminarPaciente(id)
    }

    return (
        <div className="my-10 rounded-xl bg-white px-5 py-10 shadow-md">
            <p className="mb-3 font-bold uppercase text-gray-700">
                Nombre <span className="font-normal normal-case">{nombre}</span>
            </p>{" "}
            <p className="mb-3 font-bold uppercase text-gray-700">
                Propietario <span className="font-normal normal-case">{propietario}</span>
            </p>{" "}
            <p className="mb-3 font-bold uppercase text-gray-700">
                Email <span className="font-normal normal-case">{email}</span>
            </p>{" "}
            <p className="mb-3 font-bold uppercase text-gray-700">
                Fecha Alta <span className="font-normal normal-case">{fecha}</span>
            </p>{" "}
            <p className="mb-3 font-bold uppercase text-gray-700">
                Sintomas <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="mt-10 flex justify-between">
                <button
                    className="rounded-md bg-indigo-600 py-2 px-10 font-bold uppercase text-white hover:bg-indigo-700"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    className="rounded-md bg-red-600 py-2 px-10 font-bold uppercase text-white hover:bg-red-700"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
