import Link from "next/link";

// Vlož sem přímou URL fotky z posledního IG postu (např. CDN URL exportovanou z IG)
const automotivePreviewImageUrl = "";

const latestShots = [
  { id: 1, title: "Lifestyle", status: "coming-soon" },
  { id: 2, title: "Automotive", status: "coming-soon" },
  { id: 3, title: "Nature", status: "coming-soon" },
  { id: 4, title: "Brno Sessions", status: "coming-soon" },
];

const projects = [
  {
    id: 1,
    title: "Night Drive Brno",
    category: "Automotive",
    description: "Náhled bere fotku z posledního IG postu (po vložení URL).",
    status: "coming-soon",
    previewImage: "https://unsplash.com/photos/_og9SK4nZwo",
  },
  {
    id: 2,
    title: "City Stories",
    category: "Lifestyle",
    description: "Projektová galerie bude doplněna o tvoje vlastní IG výstupy.",
    status: "coming-soon",
  },
  {
    id: 3,
    title: "Moravian Quiet",
    category: "Nature",
    description: "Projektová galerie bude doplněna o tvoje vlastní IG výstupy.",
    status: "coming-soon",
  },
];

const references = [
  {
    id: 1,
    name: "juracars.cz",
    role: "Automotive klient",
    text: "Spolupráce proběhla profesionálně, rychle a výstupy mají přesně ten styl, který jsme chtěli.",
    link: "https://instagram.com/juracars",
  },
  {
    id: 2,
    name: "Další reference",
    role: "coming soon",
    text: "Coming soon",
  },
  {
    id: 3,
    name: "Další reference",
    role: "coming soon",
    text: "Coming soon",
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
              <Link href="#projekty" className="transition hover:text-white">Projekty</Link>
              <Link href="#reference" className="transition hover:text-white">Reference</Link>
              <Link href="#kontakt" className="transition hover:text-white">Kontakt</Link>
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
              Clean. Round.
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
            <Link href="https://instagram.com/gjumija.photos" target="_blank" className="text-sm text-neutral-400 transition hover:text-white">
              Zobrazit profil ↗
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {latestShots.map((shot) => (
              <div key={shot.id} className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[1.6rem] border border-white/10 bg-neutral-900 p-4">
                <span className="text-xs uppercase tracking-[0.16em] text-neutral-400">{shot.title}</span>
                <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-neutral-300">
                  Coming soon
                </div>
                <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-neutral-300">
                  {shot.status}
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
                <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800">
                  {project.id === 1 && project.previewImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.previewImage}
                      alt="Automotive náhled z posledního IG postu"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="rounded-full border border-dashed border-white/25 px-5 py-2 text-xs uppercase tracking-[0.18em] text-neutral-300">
                      {project.id === 1 ? "vložíš URL posledního IG postu nahoře v kódu" : "coming soon — tvoje fotky"}
                    </span>
                  )}
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
                {reference.link ? (
                  <Link href={reference.link} target="_blank" className="mt-3 inline-block text-xs text-neutral-300 underline underline-offset-4">
                    @{reference.link.replace("https://instagram.com/", "")}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <footer id="kontakt" className="rounded-[2rem] border border-white/10 bg-white p-8 text-black md:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">Kontakt</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">Pojďme nafotit váš další projekt.</h2>
          <p className="mb-6 max-w-xl text-neutral-700">
            Pokud chceš fresh obsah na Instagram, web nebo kampaň, napiš mi a připravíme koncept i realizaci.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="mailto:info@gjumija.cz" className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              info@gjumija.cz
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