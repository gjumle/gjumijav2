import Image from "next/image";
import Link from "next/link";

// --- DATA (Později nahradíme reálnými daty nebo API) ---

const instagramPosts = [
  { id: 1, src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop", alt: "Car detail" },
  { id: 2, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", alt: "Nature morning" },
  { id: 3, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", alt: "Lifestyle fashion" },
  { id: 4, src: "https://images.unsplash.com/photo-1493238792015-164e850196c8?q=80&w=800&auto=format&fit=crop", alt: "Workspace" },
];

const projects = [
  { 
    id: 1, 
    title: "BMW M4 Competition", 
    category: "Automotive", 
    desc: "Noční editorial v ulicích Brna.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Summer Vibes 24", 
    category: "Lifestyle", 
    desc: "Kampaň pro lokální fashion brand.",
    image: "https://images.unsplash.com/photo-1506645292803-db782f6c3124?q=80&w=1200&auto=format&fit=crop" 
  },
];

const references = [
  { id: 1, name: "Jan Novák", role: "CEO, AutoBrno", text: "Leoš má neuvěřitelný cit pro detail. Fotky auta vypadají lépe než ve skutečnosti." },
  { id: 2, name: "Petra Svobodová", role: "Influencer", text: "Rychlá domluva a fotky, které na Instagramu trhají rekordy. Díky!" },
];

// --- KOMPONENTY ---

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      
      {/* 1. NAVIGACE (Sticky & Minimal) */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">gjumija.photos</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
            <Link href="#projects" className="hover:text-black transition-colors">Projekty</Link>
            <Link href="#references" className="hover:text-black transition-colors">Reference</Link>
            <Link href="#contact" className="hover:text-black transition-colors">Kontakt</Link>
          </div>
          <Link 
            href="https://instagram.com/gjumija.photos" 
            target="_blank"
            className="bg-black text-white text-xs px-4 py-2 rounded-full font-medium hover:bg-neutral-800 transition-colors"
          >
            Follow on IG
          </Link>
        </div>
      </nav>

      {/* 2. HERO SEKCE (Clean typography) */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
          Visual storyteller<br />
          based in Brno.
        </h1>
        <p className="text-xl text-neutral-500 max-w-xl leading-relaxed">
          Fotograf se zaměřením na automotive, lifestyle a přírodu. 
          Vytvářím vizuální obsah, který prodává a vypráví příběh.
        </p>
      </section>

      {/* 3. INSTAGRAM GRID (Rounded & Strict) */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-32">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Latest Shots</h2>
          <a href="https://instagram.com/gjumija.photos" className="text-sm text-neutral-400 hover:text-black transition-colors">@gjumija.photos ↗</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="aspect-square relative overflow-hidden rounded-3xl group bg-neutral-100">
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROJEKTY (Large Cards) */}
      <section id="projects" className="px-6 max-w-6xl mx-auto w-full mb-32">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Vybrané projekty</h2>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative w-full h-[60vh] overflow-hidden rounded-[2rem] bg-neutral-100 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-1 group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
                  <p className="text-neutral-500">{project.desc}</p>
                </div>
                <span className="border border-neutral-200 px-4 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REFERENCE (Minimal Grid) */}
      <section id="references" className="bg-neutral-50 py-24">
        <div className="px-6 max-w-6xl mx-auto w-full">
          <h2 className="text-2xl font-semibold tracking-tight mb-12">Co říkají klienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((ref) => (
              <div key={ref.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-lg leading-relaxed mb-6">"{ref.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center font-bold text-neutral-500">
                    {ref.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{ref.name}</p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">{ref.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KONTAKT & FOOTER */}
      <footer id="contact" className="bg-white py-24 px-6 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Máte projekt?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
            <a 
              href="mailto:info@gjumija.cz" 
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Napsat e-mail
            </a>
            <a 
              href="https://instagram.com/gjumija.photos" 
              className="bg-neutral-100 text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-colors"
            >
              Napsat na Instagramu
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 pt-8 border-t border-neutral-100">
            <p>© {new Date().getFullYear()} Leoš Gjumija</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}