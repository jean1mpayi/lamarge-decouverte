import React from 'react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <header className="p-6 flex justify-center">
        <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          La Marge Découverte
        </h1>
      </header>

      <main className="container mx-auto px-4 pb-12 max-w-2xl">
        {children}
      </main>

      <footer className="flex-col justify-center items-center text-center p-6 text-slate-500 text-sm" >
        &copy; {new Date().getFullYear()} La Marge Découverte. Tous droits réservés. <br />
        <div className="flex-col gap-2 items-center justify-center">
          Développé par : <br />
        <a href="https://www.instagram.com/jeanmpayi/" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">Jean Mpayi</a>
        <div className="flex gap-2 justify-center ">
          <a href="https://github.com/jean1mpayi"><Github /></a>
        
        <a href="https://www.instagram.com/jeanmpayi/"><Instagram /></a>
        
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
