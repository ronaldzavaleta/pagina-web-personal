import Head from "next/head";
import Carousel from '../components/Carousel';

const profileData = [
    {
        title: "Pasión por la Programación",
        text: "Desde los 14 años descubrí mi pasión por el mundo de la programación. Lo que empezó como una simple curiosidad se ha convertido en la carrera que disfruto cada día.",
        image: "/images/album/programacion.jpg",
    },
    {
        title: "Ajedrez",
        text: "Me gusta jugar al ajedrez y he participado en algunos torneos locales. Considero que me ayuda a tener una mente más ágil y a regular mi tiempo en momentos de estrés.",
        image: "/images/album/ajedrez_torneo.jpg",
    },
    {
        title: "Laboratorio de Química",
        text: "Hemos realizado actividades de laboratorio de química, experimentando con diferentes sustancias y aprendiendo a usar las herramientas de laboratorio.",
        image: "/images/album/quimica_lab.jpg",
    },
    {
        title: "Actividad de Informática",
        text: "Tuvimos un reto en los primeros semestres donde debíamos construir una ciudad, organizándonos con la metodología Scrum.",
        image: "/images/album/info_ciudad.jpg",
    },
];

const skills = ["JavaScript", "Python", "Java", "SQL"];

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[#070708] text-gray-100 antialiased flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
            <Head>
                <title>Ronald Zavaleta — Portafolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Portafolio de Ronald Zavaleta"
                />
                <meta name="robots" content="noindex" />
                <meta property="og:title" content="Ronald Zavaleta — Portafolio" />
                <meta
                    property="og:description"
                    content="Portafolio de Ronald Zavaleta"
                />
                <meta property="og:image" content="/images/preview.png" />
                <meta property="og:image:alt" content="Vista previa de la página" />
            </Head>

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 md:bg-white/5 md:p-10 md:rounded-4xl md:border-1 border-amber-50/10 flex flex-col md:flex-row items-start gap-8 md:gap-12 max-w-6xl w-full">

                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src="/images/avatar.jpg"
                        alt="Avatar — Ronald Zavaleta"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 border-4 border-purple-500 shadow-lg"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Ronald Zavaleta</h1>
                    <p className="text-lg md:text-xl text-gray-400 mt-1">Software Developer</p>

                    <div className="mt-4 mb-6 flex flex-wrap gap-2 justify-center md:justify-start">
                        {skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">{skill}</span>
                        ))}
                    </div>

                    <p className="text-base text-gray-300 leading-relaxed">
                        Hola! Soy Ronald Zavaleta, un estudiante de Ingenieria Informatica en la UPCH. Desde bastante joven
                        me gusto mucho el mundo de la programación, razon por la cual estudio esta carrera.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <Carousel items={profileData} />
                </div>

            </div>
        </main>
    );
}
