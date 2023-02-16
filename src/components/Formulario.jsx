import { useEffect, useState } from "react"
import Error from "./Error.jsx"

const Formulario = ({ paciente, pacientes, setPacientes, setPaciente }) => {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    function handleSubmit(e) {
        e.preventDefault()
        if ([nombre, propietario, email, fecha, sintomas].includes("")) {
            setError(true)
            return
        }
        setError(false)
        const objPaciente = { email, fecha, nombre, propietario, sintomas }

        if (paciente.id) {
            objPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map((pacienteState) =>
                pacienteState.id === paciente.id ? objPaciente : pacienteState
            )
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])
        }

        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }

    return (
        <div className="mx-5 md:w-1/2 lg:w-2/5">
            <h2 className="text-center text-3xl font-black">Seguimiento Pacientes</h2>
            <p className="mt-5 mb-10 text-center text-xl">
                Añade Pacientes y<span className="font-bold text-indigo-600"> Administralos</span>
            </p>

            <form className="mb-10 rounded-lg bg-white py-10 px-5 shadow-md" onSubmit={handleSubmit}>
                {error && <Error>Todos los campos son obligatorios!!! desde children</Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block font-bold uppercase text-gray-700">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
                        type="text"
                        placeholder="Nombre de la mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block font-bold uppercase text-gray-700">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
                        type="text"
                        placeholder="Nombre del propietario"
                        value={propietario}
                        onChange={(event) => setPropietario(event.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block font-bold uppercase text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block font-bold uppercase text-gray-700">
                        Alta
                    </label>
                    <input
                        id="alta"
                        className="mt-2 w-full rounded-md border-2 p-2"
                        type="date"
                        value={fecha}
                        onChange={(event) => setFecha(event.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="síntomas" className="block font-bold uppercase text-gray-700">
                        Síntomas
                    </label>
                    <textarea
                        id="síntomas"
                        className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
                        placeholder=" Describe los síntomas"
                        value={sintomas}
                        onChange={(event) => setSintomas(event.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className={
                        "w-full cursor-pointer bg-indigo-600 p-3 font-bold uppercase text-white hover:bg-indigo-700"
                    }
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario
