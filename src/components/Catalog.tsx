import Image from 'next/image';

type Machine = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const hekamMachines: Machine[] = [
  {
    title: 'HEKAM Heavy Duty Bag Closer',
    description: 'Built for closing jute, PP, HDPE, paper, and other bags with strong, reliable stitching.',
    tags: ['Bag Closer', 'Jute / PP / HDPE', 'Industrial'],
    image: '/products/hekam-bag-closer.png',
  },
  {
    title: 'HEKAM 95T10 Full Shuttle',
    description: 'A dependable full-shuttle machine for smooth, precise stitching on light and heavy fabrics.',
    tags: ['Full Shuttle', 'Light & Heavy Fabrics'],
    image: '/products/hekam-95t10.png',
  },
  {
    title: 'HEKAM 130K Zigzag',
    description: 'A durable zigzag machine suited to sarees and light fabrics.',
    tags: ['Zigzag Stitch', 'Sarees & Light Fabrics'],
    image: '/products/hekam-130k.png',
  },
  {
    title: 'HEKAM Link Half Shuttle',
    description: 'An easy-to-use household machine for fabrics such as cotton, silk, and denim.',
    tags: ['Half Shuttle', 'Household Use'],
    image: '/products/hekam-link.png',
  },
  {
    title: 'HEKAM Highspeed 6150',
    description: 'A high-speed industrial machine designed for smooth, precise, and durable stitching.',
    tags: ['High-Speed', 'Industrial'],
    image: '/products/hekam-6150.png',
  },
];

const jackMachines: Machine[] = [
  {
    title: 'JACK A10+',
    description: 'Premium computerized lockstitch machine with touchscreen, digital feeding, fabric sensor and Wi-Fi connectivity.',
    tags: ['Touchscreen', '300mm Arm', 'Wi-Fi'],
    image: '/products/a10.jpg',
  },
  {
    title: 'JACK A5E',
    description: 'AI-powered direct-drive lockstitch machine with fabric adaptation, digital presser foot and automatic functions.',
    tags: ['AI Adaptation', 'Direct Drive', 'Large Workspace'],
    image: '/products/a5e.jpg',
  },
  {
    title: 'JACK C5C',
    description: 'Intelligent high-speed overlock with smart feeding, automatic trimming and oil-free head technology.',
    tags: ['7,000 SPM', 'Oil-Free', 'Auto Trimmer'],
    image: '/products/c5c.png',
  },
  {
    title: 'JACK H7',
    description: 'Heavy-duty walking foot machine for leather, bags, upholstery and thick multi-layer materials.',
    tags: ['750W Motor', '4,500 SPM', 'Walking Foot'],
    image: '/products/h7.jpg',
  },
  {
    title: 'JACK 2030G',
    description: 'Computerized heavy-duty lockstitch with synchronized top and bottom feeding for difficult materials.',
    tags: ['750W Servo', 'Dual Feed', 'Heavy Duty'],
    image: '/products/2030.jpg',
  },
  {
    title: 'JACK W4S',
    description: 'Computerized flatbed interlock machine with automatic trimming and intelligent fabric feeding.',
    tags: ['Interlock', 'Auto Trim', 'Loop Detection'],
    image: '/products/w4s.jpg',
  },
  {
    title: 'JACK 781G',
    description: 'Electronic lockstitch buttonhole machine with servo motor and automatic trimming and foot lifting.',
    tags: ['Servo Motor', 'Precision', 'Automatic'],
    image: '/products/781.jpg',
  },
  {
    title: 'JACK T3',
    description: 'Heavy-duty straight knife fabric cutter with Swedish HSS blade, automatic sharpening and cooling.',
    tags: ['Fabric Cutter', 'HSS Blade', 'Cooling'],
    image: '/products/t3.jpg',
  },
  {
    title: 'JACK F6',
    description: 'High-speed direct-drive lockstitch machine offering smooth, low-noise and energy-efficient operation.',
    tags: ['Direct Drive', 'Low Noise', 'High Speed'],
    image: '/products/f6.jfif',
  },
];

function MachineCard({ machine, highlighted = false }: { machine: Machine; highlighted?: boolean }) {
  return (
    <article
      className={`group overflow-hidden rounded-xl border transition-colors hover:border-cyan-400/70 ${
        highlighted
          ? 'border-cyan-300/50 bg-slate-800/80 shadow-lg shadow-cyan-950/30'
          : 'border-cyan-500/20 bg-slate-800/60'
      }`}
    >
      <div className="relative h-64 bg-white">
        <Image
          src={machine.image}
          alt={machine.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {highlighted && (
          <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
            Featured HEKAM
          </span>
        )}
      </div>
      <div className="p-6">
        <h4 className={`mb-3 text-xl font-bold transition-colors group-hover:text-cyan-400 ${highlighted ? 'text-cyan-300' : 'text-white'}`}>
          {machine.title}
        </h4>
        <p className="mb-5 min-h-16 text-sm leading-relaxed text-slate-400">{machine.description}</p>
        <div className="flex flex-wrap gap-2">
          {machine.tags.map((tag) => (
            <span key={tag} className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Catalog() {
  return (
    <section className="bg-slate-900/50 px-6 py-24" id="catalog">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">Product range</p>
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">Featured Machinery</h2>
        <section className="mb-16 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-slate-900/70 p-6 md:p-8">
          <div className="mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Featured brand</p>
            <h3 className="text-3xl font-black text-white md:text-4xl">HEKAM Machines</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hekamMachines.map((machine) => (
              <MachineCard key={machine.title} machine={machine} highlighted />
            ))}
          </div>
        </section>
        <section>
          <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">JACK Machines</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jackMachines.map((machine) => (
              <MachineCard key={machine.title} machine={machine} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
