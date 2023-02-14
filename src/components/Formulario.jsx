const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-center text-3xl font-black">Seguimiento Pacientes</h2>
            <p className="mt-5 mb-10 text-center text-xl">
                Añade Pacientes y<span className="font-bold text-indigo-600"> Administralos</span>
            </p>

            <form className="mb-10 rounded-lg bg-white py-10 px-5 shadow-md">
                <div className="mb-5">
                    <label htmlFor="mascota" className="block font-bold uppercase text-gray-700">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
                        type="text"
                        placeholder="Nombre de la mascota"
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
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block font-bold uppercase text-gray-700">
                        Alta
                    </label>
                    <input id="alta" className="mt-2 w-full rounded-md border-2 p-2" type="date" />
                </div>
                <div className="mb-5">
                    <label htmlFor="síntomas" className="block font-bold uppercase text-gray-700">
                        Síntomas
                    </label>
                    <textarea
                        id="síntomas"
                        className="mt-2 w-full rounded-md border-2 p-2 placeholder-gray-400"
                        placeholder=" Describe los síntomas"
                    />
                </div>
                <input
                    type="submit"
                    className={
                        "w-full cursor-pointer bg-indigo-600 p-3 font-bold uppercase text-white hover:bg-indigo-700"
                    }
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario
