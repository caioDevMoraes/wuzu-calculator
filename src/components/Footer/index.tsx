import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="h-15v">
             <footer className="w-full h-full border-t-4 border-azul-escuro">
                <div className="h-full flex justify-around items-center text-center">
                    <p className="text-azul-escuro m-3 hidden md:block">Copyright © 2022 CM DEV - Todos os direitos reservados</p>
                    <div className="ml-4">
                        <a className="mr-8 no-underline bg-azul-escuro text-white py-1.5 px-6 rounded-xl hover:opacity-50 duration-600" href="https://www.instagram.com/caiomutley/" target="_blank" rel="noreferrer">Instagram</a>
                        <a className="mr-8 no-underline bg-azul-escuro text-white py-1.5 px-6 rounded-xl hover:opacity-50 duration-600" href="https://www.linkedin.com/in/caio-moraes-8026a6158/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a className="mr-8 no-underline bg-azul-escuro text-white py-1.5 px-6 rounded-xl hover:opacity-50 duration-600" href="https://github.com/caioDesenvMoraes" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer