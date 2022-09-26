import React from "react";
import { Link } from "react-router-dom";

const Err: React.FC = () => {
    return (
        <div>
            <div className="w-full h-screen bg-gradient-to-r from-vermelho to-cinza-err text-cinza-err flex flex-col justify-center items-center">
                <div className="bg-white p-10 text-center rounded-3xl my-0 mx-5 flex flex-col items-center">
                    <h1 className="text-6xl mb-5">Ops!</h1>
                    <h2 className="text-3xl mb-1.5">404 Página não encontrada</h2>
                    <p className="text-base mb-12">O documento solicitado não existe ou foi removido</p>
                    <div>
                        <Link to="/" className="no-underline bg-cinza-err p-2.5 mr-5 text-white rounded-xl">Home</Link>
                        <Link to="/calculator" className="no-underline bg-cinza-err p-2.5 mr-5 text-white rounded-xl">Calculator</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Err