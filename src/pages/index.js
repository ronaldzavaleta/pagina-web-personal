import Layout from "../components/Layout";
import AboutMe from "../components/AboutMe";
import University from "../components/University";
import Head from "next/head";


export default function Home() {
  return (
      <div className="w-full flex justify-center">
          <Head>
              <title>Ronald Zavaleta</title>
              <meta name="description" content="Pagina de presentacion de Ronald Zavaleta" />

              <meta property="og:title" content="Mi Portafolio" />
              <meta property="og:description" content="Pagina de presentacion de de Ronald Zavaleta" />
              <meta property="og:image" content="/images/preview.png" />
              <meta property="og:image:alt" content="Vista previa de la página" />

              <meta property="og:image" content="/images/avatar.jpg" />
          </Head>

          <div className="max-w-[950px] flex flex-col space-y-5">
              <Layout />
              <AboutMe />
              <University />
          </div>
      </div>
  );
}
