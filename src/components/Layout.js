import React from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Layout = () => {
    const languages = [
        { name: "JavaScript", src: "/images/logos/javascript.png" },
        { name: "CSS", src: "/images/logos/css.png" },
        { name: "HTML5", src: "/images/logos/html5.png" },
    ];

    const links = [
        { name: "Github", url: "https://github.com/ronaldzavaleta" },
    ];

    return (
        <div className="w-full space-x-[30px] flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl shadow-md bg-white/5">
            {/* Avatar */}
            <div>
                <img
                    src="/images/avatar.jpg"
                    alt="Avatar de Ronald Zavaleta"
                    className="min-w-64 w-64 min-h-64 h-64 rounded-full object-cover"
                />
            </div>

            {/* Texto */}
            <div className="flex-1">
                <h1 className="font-bold text-[25px]">Ronald Zavaleta</h1>
                <p className="text-gray-300 mt-2 text-[17px]">
                    Hola! Soy Ronald, un desarrollador web que busca la excelencia en cada
                    proyecto. Buscando adquirir conocimientos nuevos cada día.
                </p>



                <div className="flex items-center gap-4 mt-2 justify-between px-5">
                    {/* Lenguajes */}
                    <div className="w-full flex items-center gap-4 mt-4">
                        {languages.map((lang) => (
                            <div
                                key={lang.name}
                                className="w-12 h-12 flex items-center justify-center rounded-lg"
                                title={lang.name}
                            >
                                <img
                                    src={lang.src}
                                    alt={lang.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Enlaces */}
                    <div className="flex w-full justify-center items-center gap-6 mt-6">
                        {links.map((link) => (
                            <div
                                key={link.name}
                                className="flex items-center justify-center"
                            >
                                <a
                                    href={link.url}
                                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-500/50 text-white hover:bg-gray-700 text-lg font-semibold"
                                >
                                    {link.name}
                                    <OpenInNewIcon style={{ fontSize: "1.5rem" }} />
                                </a>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Layout;
