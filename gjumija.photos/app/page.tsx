import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black p-4">
      
      {/* Hlavní kontejner */}
      <div className="text-center space-y-6">
        
        {/* Logo / Název */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          gjumija.photos
        </h1>
        
        {/* WIP status s jemnou animací */}
        <div className="flex items-center justify-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
          </span>
          <p className="text-neutral-500 font-medium tracking-wide uppercase text-sm">
            Work in Progress
          </p>
        </div>

      </div>

      {/* Odkaz na Instagram (aby vás lidé mohli najít už teď) */}
      <div className="absolute bottom-10">
        <Link 
          href="https://instagram.com/gjumija.photos" 
          target="_blank"
          className="text-sm text-neutral-400 hover:text-black transition-colors border-b border-transparent hover:border-black pb-0.5"
        >
          @gjumija.photos
        </Link>
      </div>

    </main>
  );
}