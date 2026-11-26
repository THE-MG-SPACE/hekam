import Image from 'next/image';

import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6" aria-label="Main navigation">
          <a href="#" className="leading-tight text-white">
            <span className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
                <Image
                  src="/branding/company-logo.jpeg"
                  alt="SHREEM Sewing Machine Co."
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </span>
              <span>
                <span className="block text-lg font-black tracking-[0.12em]">SHREEM</span>
                <span className="block text-[10px] font-semibold tracking-[0.22em] text-cyan-400">SEWING MACHINE CO.</span>
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a href="#" className="hover:text-cyan-400">Home</a>
            <a href="#catalog" className="hover:text-cyan-400">Products</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
          <a
            href="tel:+919558700774"
            className="rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Call Now
          </a>
        </nav>
      </header>
      <Hero />
      <Catalog />
      <About />
      <Contact />
    </main>
  );
}
