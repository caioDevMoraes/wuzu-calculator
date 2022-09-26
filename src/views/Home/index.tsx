import React from "react";

import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

const Home: React.FC = () => {
    return (
        <div className="h-screen">
            <Nav/>
            <div className="w-screen h-70v w-full bg-gradient-to-r from-azul-claro to-cinza-pages text-white flex flex-col items-center">
                <h1 className="mt-0 mt-10 text-center pt-3 pb-3 text-6xl font-bold border-b-8 border-white">Wuzu MB</h1>
                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-3/5 h-full flex flex-col justify-center items-center text-center font-bold">
                        <h2 className="text-5xl">Projeto Calculadora</h2>
                        <h3 className="mt-2.5 text-2xl">Desenvolvido em React</h3>
                        <h3 className="mt-2.5 text-2xl">Desenvolvedor Caio Moraes</h3>
                    </div>
                    <div className="w-2/5 lg:flex flex-col justify-center items-center hidden">
                        <h3 className="mb-4 text-3xl font-bold">Descrição</h3>
                        <p className="text-lg text-justify h-full my-0 mx-14">
                            Projeto replicado do projeto do curso cripto dev, aonde tinha desenvolvido uma página web 
                            utilizando a biblioteca react com o template em JavaScript e o CSS puro, nesse desenvolvi novamente em
                            react mas com o template em TypeScript com o vite e o css com o tailwind.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    ) 
}

export default Home