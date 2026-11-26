'use client';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5 & CSS3']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'VS Code']
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20" id="skills">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-cyan-500/30 bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <span className="text-cyan-400">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
