"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function NavBar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    // Animação suave de entrada da barra
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    // 'fixed' garante que ela não suma no scroll
    // 'z-[100]' garante que ela fique acima de tudo
    <header className="fixed top-6 left-0 w-full flex justify-center px-4 z-50 pointer-events-none">
      <nav
        ref={navRef}
        className={`
          flex items-center justify-between py-3 w-full md:w-[85%] lg:w-3/5 
          bg-neutral-100 backdrop-blur-md border border-white/10 rounded-full px-6 
           shadow-2xl pointer-events-auto
        `}
      >
        <a
          href="#"
          className="font-bold text-xl tracking-tighter hover:text-blue-700 transition-colors"
        >
          NUR<span className="text-blue-600">CODE</span>
        </a>

        <ul
          id="nav-links"
          className="hidden md:flex items-center justify-around gap-2 *:transition-all *:duration-300 *:hover:text-white"
        >
          <li>
            <Link
              href="/"
              className="px-4 py-2 rounded-full hover:bg-blue-700  text-sm font-medium"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="px-4 py-2 rounded-full hover:bg-blue-700  text-sm font-medium"
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="px-4 py-2 rounded-full hover:bg-blue-700  text-sm font-medium"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="px-4 py-2 rounded-full hover:bg-blue-700  text-sm font-medium"
            >
              Sobre Nós
            </Link>
          </li>
        </ul>

        <button className="hidden md:block text-sm font-bold text-white bg-blue-700 hover:bg-blue-600 px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-900/20 active:scale-95">
          Contacte-nos
        </button>

        {/* Menu Mobile Melhorado */}
        <button className="md:hidden flex items-center gap-2  bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
          <span className="text-xs font-bold tracking-widest uppercase">
            Menu
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
