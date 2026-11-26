import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden px-6 pb-20 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(34,211,238,.16),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.85fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-cyan-400">
            Quality machines. Reliable service.
          </p>
          <h1 className="mb-6 max-w-3xl text-5xl font-black leading-[1.05] text-white md:text-7xl">
            Welcome to <span className="text-cyan-400">SHREEM</span> Sewing Machine Co.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Your premier destination for quality sewing machines and sewing solutions in Rajkot.
          </p>
          <p className="mb-9 max-w-2xl text-base leading-relaxed text-slate-400">
            Discover domestic and industrial machines from leading brands, backed by genuine spare parts and expert service.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#catalog" className="rounded-lg bg-cyan-500 px-8 py-4 text-center font-bold text-slate-950 transition-colors hover:bg-cyan-400">
              Explore Machines
            </a>
            <a href="tel:+919558700774" className="rounded-lg border-2 border-cyan-500 px-8 py-4 text-center font-bold text-cyan-300 transition-colors hover:bg-cyan-500/10">
              Call +91 95587 00774
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
          <div className="relative aspect-[1.25] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-8">
            <Image
              src="/products/a10.jpg"
              alt="Premium industrial sewing machine"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-contain p-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
