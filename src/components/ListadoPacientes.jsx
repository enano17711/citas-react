import Paciente from "./Paciente.jsx"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className="overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="text-center text-3xl font-black">Listado de Pacientes</h2>
                    <p className="mt-5 mb-10 text-center text-xl">
                        Administra tus <span className="font-bold text-indigo-600">Paciente y Citas</span>
                    </p>
                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="text-center text-3xl font-black">No hay pacientes</h2>
                    <p className="mt-5 mb-10 text-center text-xl">
                        Comienza agregando pacientes{" "}
                        <span className="font-bold text-indigo-600">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
