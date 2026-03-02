import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  // DATA (Přímo v komponentě, aby to nedělalo problémy s typy)
  const instagramPosts = [
    { id: 1, src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop", alt: "Automotive shot" },
    { id: 2, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", alt: "Lifestyle portrait" },
    { id: 3, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", alt: "Nature vibes" },
    { id: 4, src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop", alt: "Car detail" },
  ];

  const projects = [
    { 
      id: 1, 
      title: "Midnight Run", 
      category: "Automotive", 
      desc: "Noční Brno a BMW M4.",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "Summer Collection", 
      category: "Lifestyle", 
      desc: "Editorial pro módní značku.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" 
    },
  ];

  const references = [
    { id: 1, name: "Petr Novák", text: "Profesionální přístup a fotky, které mají atmosféru. Doporučuji." },
    { id: 2, name: "Anna Dvořáková", text: "Leoš přesně vystihl mood, který jsme pro kampaň potřebovali." },
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans">
      
      {/* 1. NAVIGACE */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight hover:opacity-70 transition-opacity">
            gjumija.photos
          </Link>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
            <Link href="#projects" className="hover:text-black transition-colors">Projekty</Link>
            <Link href="#references" className="hover:text-black transition-colors">Reference</Link>
          </div>

          <Link 
            href="https://instagram.com/gjumija.photos" 
            target="_blank"
            className="bg-black text-white text-xs px-5 py-2.5 rounded-full font-medium hover:bg-neutral-800 transition-colors"
          >
            Instagram
          </Link>
        </div>
      </nav>

      {/* 2. HERO SEKCE */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto w-full">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1] mb-8 text-neutral-900">
          Visuals.<br />
          Automotive.<br />
          Lifestyle.
        </h1>
        <p className="text-xl text-neutral-500 max-w-lg leading-relaxed">
          Jsem Leoš Gjumija. Fotograf z Brna. 
          Tvořím vizuální obsah s důrazem na čistotu a atmosféru.
        </p>
      </section>

      {/* 3. SHOTS (Instagram Grid) */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-32">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-xl font-semibold tracking-tight">Latest Shots</h2>
          <Link href="https://instagram.com/gjumija.photos" className="text-sm text-neutral-400 hover:text-black transition-colors">
            Zobrazit více ↗
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="aspect-square relative overflow-hidden rounded-2xl bg-neutral-100 group">
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROJEKTY */}
      <section id="projects" className="px-6 max-w-6xl mx-auto w-full mb-32">
        <h2 className="text-xl font-semibold tracking-tight mb-8">Vybrané projekty</h2>
        
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2rem] bg-neutral-100 mb-6 shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1">{project.title}</h3>
                  <p className="text-neutral-500">{project.desc}</p>
                </div>
                <span className="border border-neutral-200 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REFERENCE */}
      <section id="references" className="bg-neutral-50 py-24 border-y border-neutral-100">
        <div className="px-6 max-w-6xl mx-auto w-full">
          <h2 className="text-xl font-semibold tracking-tight mb-12">Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((ref) => (
              <div key={ref.id} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
                <p className="text-lg leading-relaxed mb-6 font-medium">"{ref.text}"</p>
                <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider">{ref.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            Pojďme tvořit.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <Link 
              href="mailto:info@gjumija.cz" 
              className="bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Napsat e-mail
            </Link>
          </div>
          <p className="text-sm text-neutral-400">© 2024 Leoš Gjumija. Brno.</p>
        </div>
      </footer>
    </main>
  );
}