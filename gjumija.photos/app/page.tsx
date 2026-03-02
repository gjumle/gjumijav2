"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  status?: string;
  mainImage?: string;
  gallery?: string[];
  client?: string;
  clientInstagram?: string;
};

const latestShots = [
  { id: 1, title: "Lifestyle", status: "coming-soon" },
  { id: 2, title: "Automotive", status: "coming-soon" },
  { id: 3, title: "Nature", status: "coming-soon" },
  { id: 4, title: "Brno Sessions", status: "coming-soon" },
];

const projects: Project[] = [
  {
    id: 1,
    title: "JuraCars Session",
    category: "Automotive",
    client: "juracars.cz",
    clientInstagram: "https://instagram.com/juracars",
    description:
      "Série pro juracars.cz — po kliknutí se otevře galerie celé série.",
    mainImage: "/juracars/bmw-x3-m/main.jpg",
    gallery: [
      "/juracars/bmw-x3-m/01.jpg",
      "/juracars/bmw-x3-m/02.jpg",
      "/juracars/bmw-x3-m/03.jpg",
      "/juracars/bmw-x3-m/04.jpg",
      "/juracars/bmw-x3-m/05.jpg",
      "/juracars/bmw-x3-m/06.jpg",
    ],
  },
  {
    id: 2,
    title: "City Stories",
    category: "Lifestyle",
    description: "Projektová galerie bude doplněna o tvoje vlastní výstupy.",
    status: "coming-soon",
  },
  {
    id: 3,
    title: "Moravian Quiet",
    category: "Nature",
    description: "Projektová galerie bude doplněna o tvoje vlastní výstupy.",
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
  { id: 2, name: "Další reference", role: "coming soon", text: "Coming soon" },
  { id: 3, name: "Další reference", role: "coming soon", text: "Coming soon" },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const openProject = useMemo(
    () => projects.find((project) => project.id === openProjectId) ?? null,
    [openProjectId],
  );

  return (
    <main className="bg-[var(--bg)] text-[var(--fg)] transition-colors duration-300">
      <div className="mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-8 md:pt-10">
        <header className="sticky top-4 z-50 mb-14 rounded-full border border-[var(--border)] bg-[var(--panel)]/90 px-6 py-4 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em]">
              gjumija.photos
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
              <Link href="#projekty" className="transition hover:text-[var(--fg)]">Projekty</Link>
              <Link href="#reference" className="transition hover:text-[var(--fg)]">Reference</Link>
              <Link href="#kontakt" className="transition hover:text-[var(--fg)]">Kontakt</Link>
            </nav>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
              >
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              <Link
                href="https://instagram.com/gjumija.photos"
                target="_blank"
                className="rounded-full bg-[var(--fg)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--bg)]"
              >
                Instagram
              </Link>
            </div>
          </div>
        </header>

        <section className="mb-16 grid gap-6 rounded-[2.5rem] border border-[var(--border)] bg-[var(--panel)] p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[var(--border-strong)] px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Fotograf • Brno
            </p>
            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Clean. New.
              <br />
              Contrast. Strict.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Jmenuju se Leoš Gjumija a tvořím fotografie pro značky i jednotlivce.
              Specializuju se na lifestyle, automotive a nature obsah s důrazem na čistotu,
              geometrii a výrazný kontrast.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel-2)] p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Focus</p>
            <ul className="space-y-3 text-sm">
              <li className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3">Lifestyle kampaně a osobní branding</li>
              <li className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3">Automotive focení (cars, detail, motion)</li>
              <li className="rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3">Nature série a travel vizuály</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Latest IG Shots</h2>
            <Link href="https://instagram.com/gjumija.photos" target="_blank" className="text-sm text-[var(--muted)] transition hover:text-[var(--fg)]">
              Zobrazit profil ↗
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {latestShots.map((shot) => (
              <div key={shot.id} className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--panel)] p-4">
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{shot.title}</span>
                <div className="rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-soft)] p-4 text-center text-sm text-[var(--muted)]">
                  Coming soon
                </div>
                <span className="absolute bottom-3 left-3 rounded-full border border-[var(--border-strong)] bg-[var(--bg)]/70 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
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
              <article key={project.id} className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)]">
                <button
                  type="button"
                  className="relative flex aspect-[16/9] w-full items-center justify-center bg-[var(--panel-2)] text-left"
                  onClick={() => project.gallery ? setOpenProjectId(project.id) : undefined}
                >
                  {project.mainImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.mainImage} alt={project.title} className="h-full w-full object-cover" />
                  ) : (
                    <span className="rounded-full border border-dashed border-[var(--border-strong)] px-5 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {project.status ?? "coming soon — tvoje fotky"}
                    </span>
                  )}
                </button>
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                  <div className="max-w-2xl">
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="text-[var(--muted)]">{project.description}</p>
                    {project.clientInstagram ? (
                      <Link href={project.clientInstagram} target="_blank" className="mt-2 inline-block text-sm underline underline-offset-4">
                        @{project.clientInstagram.replace("https://instagram.com/", "")}
                      </Link>
                    ) : null}
                  </div>
                  <span className="inline-flex rounded-full border border-[var(--border-strong)] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em]">
                    {project.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reference" className="mb-16 rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-6 md:p-10">
          <h2 className="mb-8 text-xl font-semibold tracking-tight">Reference</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {references.map((reference) => (
              <article key={reference.id} className="rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-5">
                <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">“{reference.text}”</p>
                <p className="text-sm font-semibold">{reference.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{reference.role}</p>
                {reference.link ? (
                  <Link href={reference.link} target="_blank" className="mt-3 inline-block text-xs underline underline-offset-4">
                    @{reference.link.replace("https://instagram.com/", "")}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <footer id="kontakt" className="rounded-[2rem] border border-[var(--border)] bg-[var(--fg)] p-8 text-[var(--bg)] md:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] opacity-70">Kontakt</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">Pojďme nafotit váš další projekt.</h2>
          <p className="mb-6 max-w-xl opacity-80">
            Pokud chceš fresh obsah na Instagram, web nebo kampaň, napiš mi a připravíme koncept i realizaci.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="mailto:info@gjumija.cz" className="rounded-full bg-[var(--bg)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--fg)]">
              info@gjumija.cz
            </Link>
            <Link
              href="https://instagram.com/gjumija.photos"
              target="_blank"
              className="rounded-full border border-[var(--bg)]/35 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em]"
            >
              DM na Instagramu
            </Link>
          </div>
        </footer>
      </div>

      {openProject && openProject.gallery ? (
        <div className="fixed inset-0 z-[60] bg-black/80 p-4 backdrop-blur-sm md:p-10">
          <div className="mx-auto max-h-full w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/20 bg-neutral-950 p-5 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{openProject.title} — galerie</h3>
                <p className="text-sm text-neutral-300">{openProject.client}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenProjectId(null)}
                className="rounded-full border border-white/30 px-4 py-2 text-sm"
              >
                Zavřít
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[openProject.mainImage, ...openProject.gallery].filter(Boolean).map((imagePath) => (
                <div key={imagePath} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imagePath} alt={`${openProject.title} foto`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
