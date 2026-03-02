import Image from "next/image";
import Link from "next/link";

const latestShots = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    alt: "Lifestyle portrét v ulicích Brna",
    tag: "Lifestyle",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
    alt: "Automotive focení ve večerním městě",
    tag: "Automotive",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop",
    alt: "Nature fotografie s jelenem v lese",
    tag: "Nature",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    alt: "Lifestyle detail a přirozené světlo",
    tag: "Lifestyle",
  },
];

const projects = [
  {
    id: 1,
    title: "Night Drive Brno",
    category: "Automotive",
    description:
      "Série nočních fotografií pro lokální detailing studio. Cíl: prémiový look, kontrastní světlo, čistá kompozice.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "City Stories",
    category: "Lifestyle",
    description:
      "Obsah pro IG kampaň módní značky. Fotky stavěné na autenticitě, jednoduchých barvách a emocích.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Moravian Quiet",
    category: "Nature",
    description:
      "Kolekce ranních a večerních záběrů z okolí Brna. Důraz na klid, prostor a atmosféru krajiny.",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600&auto=format&fit=crop",
  },
];

const references = [
  {
    id: 1,
    name: "Markéta V.",
    role: "Brand Manager, Local Wear",
    text: "Leoš dodal přesně to, co jsme chtěli: čisté vizuály, konzistentní styl a profesionální komunikaci od briefu po finální export.",
  },
  {
    id: 2,
    name: "Jakub R.",
    role: "Founder, BRN Garage",
    text: "Automotive série měla okamžitě odezvu. Fotky mají charakter, technicky sedí a perfektně fungují na Instagramu i webu.",
  },
  {
    id: 3,
    name: "Tereza N.",
    role: "Content Creator",
    text: "Skvěle vedené focení, příjemná atmosféra a výsledek, který působí přirozeně, ale zároveň velmi prémiově.",
  },
];

export default function Home() {
  return (
    <main className="bg-neutral-950 text-neutral-50">
      <div className="mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-8 md:pt-10">
        <header className="sticky top-4 z-50 mb-14 rounded-full border border-white/15 bg-neutral-900/85 px-6 py-4 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
              gjumija.photos
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
              <Link href="#projekty" className="transition hover:text-white">
                Projekty
              </Link>
              <Link href="#reference" className="transition hover:text-white">
                Reference
              </Link>
              <Link href="#kontakt" className="transition hover:text-white">
                Kontakt
              </Link>
            </nav>
            <Link
              href="https://instagram.com/gjumija.photos"
              target="_blank"
              className="rounded-full border border-white/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200"
            >
              Instagram
            </Link>
          </div>
        </header>

        <section className="mb-16 grid gap-6 rounded-[2.5rem] border border-white/10 bg-neutral-900 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-300">
              Fotograf • Brno
            </p>
            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Clean. New.
              <br />
              Contrast. Strict.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
              Jmenuju se Leoš Gjumija a tvořím fotografie pro značky i jednotlivce.
              Specializuju se na lifestyle, automotive a nature obsah s důrazem na čistotu,
              geometrii a výrazný kontrast.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-neutral-800 to-neutral-950 p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400">Focus</p>
            <ul className="space-y-3 text-sm text-neutral-200">
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Lifestyle kampaně a osobní branding</li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Automotive focení (cars, detail, motion)</li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Nature série a travel vizuály</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Latest IG Shots</h2>
            <Link
              href="https://instagram.com/gjumija.photos"
              target="_blank"
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              Zobrazit profil ↗
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {latestShots.map((shot) => (
              <div key={shot.id} className="group relative aspect-square overflow-hidden rounded-[1.6rem] border border-white/10 bg-neutral-900">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.15em]">
                  {shot.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projekty" className="mb-16">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">Vybrané projekty</h2>
          <div className="space-y-10">
            {projects.map((project) => (
              <article key={project.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
                </div>
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                  <div className="max-w-2xl">
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="text-neutral-300">{project.description}</p>
                  </div>
                  <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-200">
                    {project.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reference" className="mb-16 rounded-[2rem] border border-white/10 bg-neutral-900 p-6 md:p-10">
          <h2 className="mb-8 text-xl font-semibold tracking-tight">Reference</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {references.map((reference) => (
              <article key={reference.id} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="mb-4 text-sm leading-relaxed text-neutral-200">“{reference.text}”</p>
                <p className="text-sm font-semibold">{reference.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">{reference.role}</p>
              </article>
            ))}
          </div>
        </section>

        <footer id="kontakt" className="rounded-[2rem] border border-white/10 bg-white p-8 text-black md:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">Kontakt</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">Pojďme nafotit váš další projekt.</h2>
          <p className="mb-6 max-w-xl text-neutral-700">
            Pokud chcete fresh obsah na Instagram, web nebo kampaň, napište mi a připravíme koncept i realizaci.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="mailto:info@gjumija.cz" className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Napsat e-mail
            </Link>
            <Link
              href="https://instagram.com/gjumija.photos"
              target="_blank"
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em]"
            >
              DM na Instagramu
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
