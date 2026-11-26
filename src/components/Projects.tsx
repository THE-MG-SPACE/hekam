'use client';

export default function Projects() {
  const projects = [
    { title: 'E-Commerce Platform', description: 'A full-featured e-commerce platform built with React and Node.js, featuring product catalogs, user authentication, and payment integration.', tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'], link: '#' },
    { title: 'Task Management App', description: 'Collaborative task management application with real-time updates, team collaboration features, and intuitive UI built with Next.js.', tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebSocket'], link: '#' },
    { title: 'Analytics Dashboard', description: 'Data visualization dashboard with interactive charts and real-time metrics. Built with React and integrated with multiple data sources.', tags: ['React', 'Chart.js', 'Python', 'PostgreSQL'], link: '#' },
    { title: 'Social Media Feed', description: 'A modern social media feed application with infinite scroll, likes, comments, and user profiles built with React and Firebase.', tags: ['React', 'Firebase', 'Tailwind CSS', 'JavaScript'], link: '#' },
    { title: 'Weather Application', description: 'Real-time weather application with geolocation support and weather forecasting powered by API integration.', tags: ['React', 'API Integration', 'Geolocation', 'Responsive Design'], link: '#' },
    { title: 'Portfolio Generator', description: 'Automated portfolio generation tool that creates beautiful portfolios from user input with customizable templates.', tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PDF Export'], link: '#' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-slate-900/50" id="projects">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-lg border border-cyan-500/30 bg-slate-800/50 p-6 hover:border-cyan-400/60 hover:bg-slate-800/80 transition-all duration-300 overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
