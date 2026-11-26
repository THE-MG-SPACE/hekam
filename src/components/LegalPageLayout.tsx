import Link from 'next/link';

type LegalPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 md:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
        >
          &larr; Back to SHREEM Sewing Machine Co.
        </Link>
        <header className="mb-10 mt-10 border-b border-slate-700/70 pb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            SHREEM SEWING MACHINE CO. | Rajkot
          </p>
          <h1 className="text-4xl font-black text-white md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: 27 November 2026</p>
        </header>
        <div className="space-y-8 text-base leading-7 text-slate-300">{children}</div>
        <footer className="mt-12 border-t border-slate-700/70 pt-6 text-sm text-slate-400">
          <p>
            Questions? Email{' '}
            <a className="text-cyan-400 hover:text-cyan-300" href="mailto:Shreemsewingmachineco@gmail.com">
              Shreemsewingmachineco@gmail.com
            </a>{' '}
            or call{' '}
            <a className="text-cyan-400 hover:text-cyan-300" href="tel:+919558700774">
              +91 95587 00774
            </a>
            .
          </p>
          <nav aria-label="Legal pages" className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-cyan-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-cyan-300">
              Terms &amp; Conditions
            </Link>
          </nav>
        </footer>
      </article>
    </main>
  );
}
