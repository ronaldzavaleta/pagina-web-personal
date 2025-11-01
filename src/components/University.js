import React from "react";

const University = () => {
    const entries = [
        {
            title: "Laboratorio de Quimica",
            text: (
                <>
                    Hemos realizado actividades de laboratorio de quimica, experimentando con diferentes sustancias
                    viendo sus reacciones, y aprendiendo a usar las herramientas de laboratorio.
                </>
            ),
            image: "/images/album/quimica_lab.jpg",
            imageCover: false,
            imageBackground: "#ffffff",
        },
        {
            title: "Actividad de Informatica",
            text: (
                <>
                    Tuvimos un reto los primeros semestres de la carrera, donde debiamos realizar la construccion de una
                    ciudad, organizandonos con la metodologia Scrum.
                </>
            ),
            image: "/images/album/info_ciudad.jpg",
            imageCover: false,
            imageBackground: "#ffffff",
        },
    ];

    return (
        <div className="w-full space-y-[40px] p-6 rounded-2xl shadow-md bg-white/5">
            <div className="w-full flex justify-center">
                <h1 className="font-bold text-[25px]">Mi Universidad</h1>
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

export default University;
