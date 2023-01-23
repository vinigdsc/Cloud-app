import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false); // estado da nav bar, vai ser usado pra quando clicado puxar o menu pra baixo
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">SuaMarca</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true} offset={50} duration={500}>
                Sobre
              </Link>
            </li>

            <li>
              <Link to="support" smooth={true} offset={50} duration={500}>
                Suporte
              </Link>
            </li>

            <li>
              <Link to="platforms" smooth={true} offset={50} duration={500}>
                Plataformas
              </Link>
            </li>

            <li>
              <Link to="pricing" smooth={true} offset={50} duration={500}>
                Preços
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex p-4">
          <button className="border-none bg-transparent text-black mr-4">
            Entrar
          </button>
          <button className="px-8 py-3">Registrar</button>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? ( // se o oposto da nav (!nav) for verdade então vamos executar...
            <Bars3Icon className="w-5" />
          ) : (
            <XMarkIcon className="w-5" />
          )}{" "}
        </div>
      </div>
      {/*se a navbar existir então hidden, caso contrario X*/}
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">Sobre</li>
        <li className="border-b-2 border-zinc-300 w-full">Suporte</li>
        <li className="border-b-2 border-zinc-300 w-full">Plataformas</li>
        <li className="border-b-2 border-zinc-300 w-full">Preços</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Entrar
          </button>
          <button className="px-8 py-3">Registrar</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
