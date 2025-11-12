import AboutMe from "../components/AboutMe";
import Head from "next/head";
import University from "@/components/University";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070708] text-gray-100 antialiased flex justify-center">
      <Head>
        <title>Ronald Zavaleta — Portafolio</title>
        <meta
          name="description"
          content="Portafolio de Ronald Zavaleta"
        />

        <meta property="og:title" content="Ronald Zavaleta — Portafolio" />
        <meta
          property="og:description"
          content="Portafolio de Ronald Zavaleta"
        />
        <meta property="og:image" content="/images/preview.png" />
        <meta property="og:image:alt" content="Vista previa de la página" />
      </Head>

      <div className="max-w-[980px] w-full px-6 py-12">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Ronald Zavaleta</h1>
            <p className="text-sm text-gray-400">Software Developer</p>
          </div>

          <nav className="hidden sm:flex space-x-4">
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition">
              Sobre mí
            </a>
            <a href="#university" className="text-sm text-gray-300 hover:text-white transition">
              Educación
            </a>
            <a href="/contact" className="text-sm text-gray-300 hover:text-white transition">
              Contacto
            </a>
          </nav>
        </header>

        <section className="mb-12">
          {/* Hero: imagen a la izquierda, contenido a la derecha (responsive) */}
          <div className="md:flex gap-8 rounded-2xl bg-gradient-to-b from-[#0f0f10] to-[#0b0b0c] border border-gray-800 p-6 md:p-10 shadow-[0_8px_30px_rgba(2,6,23,0.6)] items-center">
            {/* Imagen */}
            <div className="flex items-center justify-center">
              <div className="w-74 h-74 rounded-xl overflow-hidden border border-white/6 bg-gradient-to-br from-transparent to-white/2">
                <img
                  src="/images/avatar.jpg"
                  alt="Avatar — Ronald Zavaleta"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Hola, soy Ronald.</h2>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  Hola! Soy Ronald, un desarrollador de Lima, Peru, que busca la excelencia en cada
                    proyecto. Buscando adquirir conocimientos nuevos cada día.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-black px-5 py-2 rounded-full font-medium shadow-sm hover:scale-[1.02] transition-transform"
                >
                  Ver más
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border border-gray-700 px-5 py-2 rounded-full text-gray-300 hover:text-white transition"
                >
                  Contacto
                </a>
              </div>

              <div className="pt-4 border-t border-white/6 flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="px-3 py-1 bg-white/3 rounded-full">UI / UX</span>
                <span className="px-3 py-1 bg-white/3 rounded-full">Frontend</span>
                <span className="px-3 py-1 bg-white/3 rounded-full">React / Next.js</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-6 mb-8">
          <div className="rounded-xl bg-[#0f0f10] border border-gray-800 p-6 shadow-sm">
            <AboutMe />
          </div>
        </section>

        <section id="university">
          <div className="rounded-xl bg-[#0f0f10] border border-gray-800 p-6 shadow-sm">
            <University />
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ronald Zavaleta. Proyecto personal para la UPCH
        </footer>
      </div>
    </main>
  );
}
