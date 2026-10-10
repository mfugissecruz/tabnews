import Head from "next/head";

function GithubIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>marcelocruz.dev | Desenvolvedor Web</title>
        <meta
          name="description"
          content="Marcelo Cruz - Desenvolvedor Web especializado em PHP, Laravel, criação de sites e landing pages."
        />
        <meta
          name="keywords"
          content="desenvolvedor web, PHP, Laravel, landing page, criação de sites, freelancer, marcelocruz.dev"
        />
        <meta name="author" content="Marcelo Cruz" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="marcelocruz.dev | Desenvolvedor Web"
        />
        <meta
          property="og:description"
          content="Desenvolvedor Web especializado em PHP, Laravel, criação de sites e landing pages."
        />
        <meta property="og:url" content="https://marcelocruz.dev" />
        <meta property="og:site_name" content="marcelocruz.dev" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="marcelocruz.dev | Desenvolvedor Web"
        />
        <meta
          name="twitter:description"
          content="Desenvolvedor Web especializado em PHP, Laravel, criação de sites e landing pages."
        />

        {/* GEO */}
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />

        {/* Canonical */}
        <link rel="canonical" href="https://marcelocruz.dev" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Marcelo Cruz",
              url: "https://marcelocruz.dev",
              jobTitle: "Desenvolvedor Web",
              knowsAbout: [
                "PHP",
                "Laravel",
                "Landing Pages",
                "Web Development",
              ],
              sameAs: [
                "https://www.linkedin.com/in/marcelocruzdev",
                "https://github.com/mfugissecruz",
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-body flex flex-col items-center justify-between px-6 py-12 selection:bg-neutral-200 dark:selection:bg-neutral-700 relative overflow-hidden">
        {/* Spacer */}
        <div />

        {/* Main Content */}
        <main className="flex flex-col items-center gap-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
            marcelocruz.dev
          </h1>

          <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-light tracking-wide">
            Em breve
            <span className="inline-flex w-[1.5em]">
              <span className="animate-dot1">.</span>
              <span className="animate-dot2">.</span>
              <span className="animate-dot3">.</span>
            </span>
          </p>

          {/* Social Links */}
          <nav
            aria-label="Redes sociais"
            className="flex items-center gap-6 mt-4"
          >
            <a
              href="https://www.linkedin.com/in/marcelocruzdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/mfugissecruz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </nav>
        </main>

        {/* Footer */}
        <footer className="text-center text-neutral-400 dark:text-neutral-600 text-xs sm:text-sm relative z-10">
          <p className="italic">Soli Deo Gloria</p>
          <p className="mt-1">
            {new Date().getFullYear()} &copy; marcelocruz.dev
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes dot {
          0%, 20% { opacity: 0; }
          40%, 100% { opacity: 1; }
        }
        .animate-dot1 { animation: dot 1.4s infinite; animation-delay: 0s; }
        .animate-dot2 { animation: dot 1.4s infinite; animation-delay: 0.2s; }
        .animate-dot3 { animation: dot 1.4s infinite; animation-delay: 0.4s; }
      `}</style>
    </>
  );
}
