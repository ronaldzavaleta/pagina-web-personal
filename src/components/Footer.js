import React from "react";

const Footer = () => {
    return (
        <div className="w-full space-y-[40px] p-6 rounded-2xl shadow-md bg-white/5">
            <div className="flex justify-between">
                <p className="text-[15px]">
                    © Ronald Zavaleta 2025. Todos los derechos reservados. 
                </p>
                <div className="flex space-x-5">
                    <a href="https://github.com/ronaldzav" className="text-[15px]">
                        Github
                    </a>
                    <a href="https://ronaldzav.com" className="text-[15px]">
                        Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
