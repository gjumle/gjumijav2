import Image from "next/image";
import Link from "next/link";

// Tady si pak vyměníš odkazy za svoje fotky
const portfolioItems = [
  { id: 1, category: "Automotive", src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop", alt: "Sportovní auto v noci" },
  { id: 2, category: "Lifestyle", src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", alt: "Móda a lifestyle" },
  { id: 3, category: "Nature", src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop", alt: "Příroda a hory" },
  { id: 4, category: "Automotive", src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop", alt: "Detail auta" },
  { id: 5, category: "Portrait", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", alt: "Portrét dívky" },
  { id: 6, category: "Brno", src: "https://images.unsplash.com/photo-1563503657321-4d1d9111c479?q=80&w=800&auto=format&fit=crop", alt: "Město večer" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      
      {/* HERO SEKCE */}
      <section className="w-full h-[80vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <div className="z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
            LEOŠ GJUMIJA
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-widest uppercase">
            Photography
          </p>
          <div className="flex gap-4 justify-center mt-8 text-sm text-gray-500">
            <span>AUTOMOTIVE</span>
            <span>•</span>
            <span>LIFESTYLE</span>
            <span>•</span>
            <span>NATURE</span>
          </div>
        </div>

        {/* Pozadí Hero sekce - jemný gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-0" />
      </section>

      {/* O MNĚ SEKCE */}
      <section className="max-w-2xl px-6 py-20 text-center text-gray-300 leading-relaxed">
        <p className="text-lg">
          Jsem fotograf z <strong>Brna</strong>. Zachycuji momenty, stroje a atmosféru.
          Mým cílem je tvořit vizuály, které mají hloubku a příběh.
          <br /><br />
          Hledáte fotografa pro svůj projekt nebo jen chcete kvalitní fotky na sítě?
        </p>
        <div className="mt-8">
           <Link 
            href="https://instagram.com/gjumija.photos" 
            target="_blank"
            className="border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
           >
             Napsat mi na Instagramu
           </Link>
        </div>
      </section>

      {/* GALERIE (MASONRY GRID) */}
      <section className="w-full max-w-7xl px-4 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left ml-2">Vybrané práce</h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="break-inside-avoid relative group overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized // Pro externí Unsplash linky, u tvých fotek to pak smažeme
              />
              {/* Overlay s kategorií při najetí myší */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-light tracking-widest uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Leoš Gjumija. Všechna práva vyhrazena.</p>
        <p className="mt-2">Brno, Czech Republic</p>
      </footer>
    </main>
  );
}