import React from "react";

const AboutMe = () => {
    const entries = [
        {
            title: "Pasión por la Programación",
            text: (
                <>
                    Desde los 14 años descubrí mi pasión por el mundo de la programación.
                    Lo que empezó como una simple curiosidad se ha convertido en la carrera que
                    disfruto cada día, siempre buscando aprender nuevas tecnologías y resolver
                    problemas complejos a través del código.
                </>
            ),
            image: "/images/album/programacion.jpg", // Puedes cambiar esta imagen por una más personal
            imageCover: true,
            imageBackground: "#1a202c",
        },
        {
            title: "Ajedrez",
            text: (
                <>
                    Me gusta jugar al ajedrez y asi mismo he particiado en algunos torneos locales. Ya que me encanta este
                    deporte, porque considero que me ayuda a tener una mente mas agil y aprender a regular mi tiempo en momentos
                    de estres y alta presion.
                </>
            ),
            image: "/images/album/ajedrez_torneo.jpg",
            imageCover: false,
            imageBackground: "#ffffff",
        },
    ];

    return (
        <section className="space-y-3">
            <h3 className="text-xl font-semibold">Sobre mí</h3>

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
        </section>
    );
};

export default AboutMe;
