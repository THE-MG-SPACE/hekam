import Image from 'next/image';

export default function Contact() {
  return (
    <section className="px-6 py-24" id="contact">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">Contact Us</p>
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">Visit or contact our showroom</h2>
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/70 p-6">
              <p className="mb-2 text-sm font-bold text-cyan-400">Address</p>
              <p className="leading-relaxed text-slate-200">
                Shop No. 150, 1st Floor, Shiromani Complex,<br />
                Bhupendra Road, Opp. Balaji Hanuman Temple,<br />
                Diwanpara, Rajkot, Gujarat 360001
              </p>
            </div>
            <a href="tel:+919558700774" className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-slate-900/70 p-6 transition-colors hover:border-cyan-400">
              <div>
                <p className="mb-2 text-sm font-bold text-cyan-400">Phone</p>
                <p className="font-semibold text-white">+91 95587 00774</p>
              </div>
              <span className="text-2xl">📞</span>
            </a>
            <a href="https://wa.me/919558700774" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-slate-900/70 p-6 transition-colors hover:border-cyan-400">
              <div>
                <p className="mb-2 text-sm font-bold text-cyan-400">WhatsApp</p>
                <p className="font-semibold text-white">Chat with us</p>
              </div>
              <span className="text-2xl">💬</span>
            </a>
            <a href="https://www.instagram.com/shreem_sewing_machine?utm_source=qr&lqvp=dG44aWIxbTF3bzd2" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-slate-900/70 p-6 transition-colors hover:border-cyan-400">
              <div>
                <p className="mb-2 text-sm font-bold text-cyan-400">Instagram</p>
                <p className="font-semibold text-white">@shreem_sewing_machine</p>
              </div>
              <span className="text-2xl">📸</span>
            </a>
            <a href="mailto:Shreemsewingmachineco@gmail.com" className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-slate-900/70 p-6 transition-colors hover:border-cyan-400">
              <div>
                <p className="mb-2 text-sm font-bold text-cyan-400">Email</p>
                <p className="font-semibold text-white">Shreemsewingmachineco@gmail.com</p>
              </div>
              <span className="text-2xl">📧</span>
            </a>
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/70 p-6">
              <p className="mb-3 text-sm font-bold text-cyan-400">Opening Hours</p>
              <p className="mb-2 text-slate-200">Monday - Saturday: <span className="font-semibold">10:00 AM - 8:00 PM</span></p>
              <p className="text-slate-200">Sunday: <span className="font-semibold">11:00 AM - 6:00 PM</span></p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-cyan-500/20 bg-slate-900">
            <iframe
              title="SHREEM Sewing Machine Co. location"
              src="https://www.google.com/maps?q=Shop+No.+150,+1st+Floor,+Shiromani+Complex,+Bhupendra+Road,+Rajkot,+Gujarat+360001&output=embed"
              width="100%"
              height="520"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
            <a
              href="https://google.com/maps?cid=1182569682666762813&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 items-center justify-center font-bold text-cyan-400 hover:text-cyan-300"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
        <footer className="mt-16 flex flex-col items-center justify-center gap-3 border-t border-slate-700/50 py-8 text-center sm:flex-row sm:gap-4">
          <Image
            src="/branding/hekam-logo.png"
            alt="HEKAM"
            width={48}
            height={48}
            sizes="48px"
            className="object-contain"
            unoptimized
          />
          <p className="text-sm text-slate-400">© 2026 SHREEM SEWING MACHINE CO. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
