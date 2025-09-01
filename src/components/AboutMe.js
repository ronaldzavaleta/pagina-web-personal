import React from "react";

const AboutMe = () => {
    const entries = [
        {
            title: "Estudios Universitarios",
            text: (
                <>
                    Actualmente estudio la carrera de{" "}
                    <span className="font-semibold text-blue-300">Ingeniería Informática</span>{" "}
                    en la Universidad Peruana Cayetano Heredia, una de las instituciones más reconocidas del Perú.
                    Esta formación me brinda bases sólidas en programación, resolución de problemas y trabajo en equipo.
                </>
            ),
            image: "/images/album/cayetano_central.webp",
            imageCover: true,
        },
        {
            title: "Beca Universitaria",
            text: (
                <>
                    Obtuve la{" "}
                    <span className="font-semibold text-green-300">Beca 18 de Pronabec</span>,
                    lo que me permitió acceder a estudios universitarios con financiamiento completo.
                    Esto reafirma mi compromiso con la excelencia académica y el esfuerzo constante.
                </>
            ),
            image: "/images/album/pronabec_beca18.png",
            imageCover: false,
            imageBackground: "#ffffff",
        },
    ];

    return (
        <div className="w-full space-y-[40px] p-6 rounded-2xl shadow-md bg-white/5">
            <div className="w-full flex justify-center">
                <h1 className="font-bold text-[25px]">Sobre Mi</h1>
            </div>

            <div className="w-full flex flex-col flex-1 space-y-12">
                {entries.map((entrie, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={entrie.index}
                            className={`flex flex-col sm:flex-row ${
                                isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                            } items-center gap-10`}
                        >
                            {/* Imagen */}
                            <div
                                className="rounded-xl flex-shrink-0"
                                style={{
                                    backgroundColor: entrie.imageBackground || "transparent",
                                }}
                            >
                                <img
                                    src={entrie.image}
                                    className={`rounded-xl ${
                                        entrie.imageCover
                                            ? "object-cover w-[300px] h-[250px]"
                                            : "object-contain w-[300px] h-[250px] p-4"
                                    }`}
                                />
                            </div>

                            {/* Texto */}
                            <div className="flex flex-col space-y-2 max-w-xl">
                                <h2 className="font-bold text-[25px] text-gray-300">
                                    {entrie.title}
                                </h2>
                                <p className="text-gray-200 leading-relaxed text-[17px]">
                                    {entrie.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutMe;
