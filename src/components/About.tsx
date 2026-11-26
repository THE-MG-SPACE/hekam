import Image from 'next/image';

export default function About() {
  const services = [
    'Domestic sewing machines',
    'Industrial sewing machines',
    'Genuine spare parts',
    'Machine repair and expert service',
  ];

  return (
    <section className="px-6 py-24" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="relative h-[460px] overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900">
          <Image
            src="/gallery/gallery-1.jpg"
            alt="Sewing machines and workshop solutions"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">About Us</p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">The right machine for every sewing need</h2>
          <p className="mb-5 text-lg leading-relaxed text-slate-300">
            With years of experience in the industry, SHREEM SEWING MACHINE CO. is committed to providing the best sewing machines, spare parts, and expert services to our valued customers.
          </p>
          <p className="mb-8 leading-relaxed text-slate-400">
            Whether you&apos;re a professional tailor, a small business owner, or a home sewing enthusiast, we have the perfect sewing machine solution for you.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3 rounded-lg border border-cyan-500/15 bg-slate-900/60 p-4 text-slate-200">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan-500/15 text-cyan-400">✓</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
