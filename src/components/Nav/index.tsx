import React from "react";
import Logo from "../../assets/img/logo.jpg"
import { Link } from "react-router-dom"

const Nav: React.FC = () => {
    return (
        <div>
            <header className="w-screen h-15v border-b-4 border-azul-escuro">
                <div className="flex justify-around items-center h-full w-full">
                    <img className="w-24 ml-3 h-full" src={ Logo } alt="logo"/>
                    <div>
                        <Link to="/" className="mr-8 no-underline bg-azul-escuro text-white py-1 px-6 rounded-xl hover:opacity-50 duration-600">Home</Link>
                        <Link to="/calculator" className="mr-8 no-underline bg-azul-escuro text-white py-1 px-6 rounded-xl hover:opacity-50 duration-600">Calculator</Link>
                    </div>
                    {/* <div className="links-hamburguer">
                        <input id="menu-hamburguer" type="checkbox"/>
                        <label htmlFor="menu-hamburguer">
                            <span className="hamburguer"></span>
                            <div className="links-2">
                                <Link to="/" className="item">Home</Link>
                                <Link to="/calculator" className="item">Calculator</Link>
                                <a href="https://www.instagram.com/caiomutley/" target="_blank" rel="noreferrer" className="item">Instagram</a>
                                <a href="https://www.linkedin.com/in/caio-moraes-8026a6158/" target="_blank" rel="noreferrer" className="item">Linkedin</a>
                                <a href="https://github.com/caioDesenvMoraes" target="_blank" rel="noreferrer" className="item">Github</a>
                            </div>
                        </label>   
                    </div> */}
                </div>
            </header>
        </div>
    )
}

export default Nav