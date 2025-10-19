import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, Award, ChevronRight } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "InsightBoard",
      description: "Interactive data visualization web app for visualizing CSV datasets with dynamic line, bar, and pie charts.",
      tech: ["React.js", "TailwindCSS", "Recharts", "PapaParse"],
      features: ["CSV data parsing", "40% faster chart rendering", "Modular React components", "State management with hooks"],
      demoLink: "https://data-visualizer-nine.vercel.app/",
      repoLink: "https://github.com/Shreyansh3108/Data-Visualizer",
      image: "📊",
      impact: "40% faster rendering"
    },
    {
      id: 2,
      title: "Cipher Shield",
      description: "Full-stack secure messaging system with AES encryption, JWT authentication, and AI-powered ransomware detection.",
      tech: ["Django", "Streamlit", "Python", "Redis", "ML"],
      features: ["92% precision threat detection", "Real-time encryption", "Rate limiting", "Admin dashboard"],
      demoLink: "https://ciphershieldv3-kentdiwuszkthgk8bipobg.streamlit.app/",
      repoLink: "https://github.com/Harshit0502/Cipher_Shield_V3_unDER_DEV",
      image: "🛡️",
      impact: "92% precision"
    },
    {
      id: 3,
      title: "Sorting Visualizer",
      description: "Interactive visualizer showcasing Bubble, Insertion, Merge, and Quick Sort with real-time performance metrics.",
      tech: ["JavaScript", "HTML", "CSS", "Data Structures"],
      features: ["Customizable array size", "Speed controls", "Time & Space complexity analysis", "20% faster rendering"],
      demoLink: "https://sorting-visualizer-two-chi.vercel.app/",
      repoLink: "https://github.com/Shreyansh3108/sorting-visualizer",
      image: "🎨",
      impact: "20% faster"
    },
    {
      id: 4,
      title: "Calculator App",
      description: "Responsive calculator with 4 arithmetic operations, 20+ keyboard shortcuts, and cross-browser compatibility.",
      tech: ["JavaScript", "HTML", "CSS"],
      features: ["Real-time updates", "Keyboard shortcuts", "Cross-platform support", "2s load time"],
      demoLink: "https://calc-app-orpin.vercel.app/",
      repoLink: "https://github.com/Shreyansh3108/Calc_App",
      image: "🧮",
      impact: "2s load time"
    }
  ];

  const skills = {
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    "Backend": ["Node.js", "Express.js", "Django", "Python", "API Design"],
    "Databases": ["MongoDB", "MySQL", "Firebase", "Database Optimization"],
    "DevOps & Tools": ["Git", "GitHub", "VS Code", "CI/CD", "Docker Basics"],
    "Core CS": ["DSA", "OS", "DBMS", "Networks", "System Design"]
  };

  const achievements = [
    {
      title: "Graph Camp 2024",
      description: "Selected from 80,000+ applicants for advanced problem-solving training by Codeforces Master",
      icon: "🏆",
      stat: "Top 0.1%"
    },
    {
      title: "AtomQuest 2024",
      description: "Reached Round 2 from 14K+ participants; ranked top ~2000",
      icon: "🎯",
      stat: "Top 14%"
    },
    {
      title: "LeetCode Rating",
      description: "Rating: 1582 (Top 25%) with consistent problem-solving across medium and hard problems",
      icon: "💻",
      stat: "1582 Rating"
    }
  ];

  const highlights = [
    {
      label: "Full Stack Development",
      desc: "End-to-end web application development using React, Node.js, Express, and MongoDB. Built complete features from database design to responsive UI."
    },
    {
      label: "Data Structures & Algorithms",
      desc: "Strong foundation in DSA with LeetCode rating of 1582 (Top 25%). Experience solving complex algorithmic problems and optimizing code efficiency."
    },
    {
      label: "System Design & Architecture",
      desc: "Understanding of scalable architectures, RESTful API design, database optimization, and authentication systems. Focus on writing clean, maintainable code."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        
        .glow-arrow { transition: all 0.3s ease; }
        .glow-arrow:hover { transform: translateX(4px); }
        .glow-arrow svg { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5)); transition: all 0.3s ease; }
        .glow-arrow:hover svg { filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 24px rgba(59, 130, 246, 0.4)); color: #60a5fa; }
        
        .gradient-text { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #3b82f6 100%); background-size: 200% 200%; animation: gradient-shift 8s ease infinite; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        
        .card-hover { transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1); }
        .card-hover:hover { transform: translateY(-8px); border-color: rgba(59, 130, 246, 0.5); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1); }
        
        .tech-badge { background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(59, 130, 246, 0.3); transition: all 0.3s ease; }
        .tech-badge:hover { background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2)); border-color: rgba(59, 130, 246, 0.6); box-shadow: 0 0 12px rgba(59, 130, 246, 0.3); }
        
        .skill-item { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(59, 130, 246, 0.1); transition: all 0.3s ease; cursor: pointer; }
        .skill-item:hover { background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.4); transform: translateY(-2px); box-shadow: 0 8px 16px rgba(59, 130, 246, 0.15); }
        
        .achievement-card { background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05)); border: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.4s ease; }
        .achievement-card:hover { background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.08)); border-color: rgba(59, 130, 246, 0.4); transform: translateY(-6px); }
        
        .highlight-box { background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.08)); border-left: 3px solid #3b82f6; transition: all 0.3s ease; }
        .highlight-box:hover { border-left-color: #06b6d4; background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(6, 182, 212, 0.12)); transform: translateX(4px); }
        
        .nav-link { position: relative; padding-bottom: 8px; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: linear-gradient(90deg, #3b82f6, #06b6d4); transition: width 0.4s ease; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-100 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.2), transparent)',
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
          zIndex: 1
        }}
      />
      <div 
        className="pointer-events-none fixed w-64 h-64 rounded-full blur-2xl opacity-20 transition-all duration-150 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5), transparent)',
          left: `${mousePos.x - 128}px`,
          top: `${mousePos.y - 128}px`,
          zIndex: 1
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold gradient-text">Shreyansh Dwivedi</div>
            
            <div className="hidden md:flex gap-8">
              {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-slate-300 hover:text-blue-400">
                  {item}
                </a>
              ))}
            </div>

            <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" id="home">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">Shreyansh Dwivedi</h1>
              <p className="text-2xl text-blue-300 mb-4 font-semibold">Full Stack Developer | SDE</p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed font-medium">
                I'm a passionate Full-Stack Developer focused on building scalable, high-performance web applications using React, Node.js, and MongoDB. With a strong foundation in Data Structures, Algorithms, and System Design, I aim to craft clean, efficient, and reliable solutions. Currently exploring opportunities to contribute as a Software Development Engineer (SDE) and grow through real-world product challenges.
              </p>
              
              <div className="flex gap-4 mb-8 flex-wrap">
                <a href="mailto:nikkudwivedi4942@gmail.com?subject=Hi%20Shreyansh&body=Hello%20Shreyansh" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-all transform hover:scale-105 font-medium">
                  Get in Touch
                </a>
                <a href="https://github.com/Shreyansh3108" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg transition-all font-medium">
                  View GitHub
                </a>
                <a href="https://www.linkedin.com/in/shreyansh-dwivedi-684b67274/" target="_blank" rel="noopener noreferrer" className="border-2 border-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg transition-all font-medium">
                  View LinkedIn
                </a>
              </div>

              <div className="flex gap-6">
                <a href="https://github.com/Shreyansh3108" target="_blank" rel="noopener noreferrer" className="glow-arrow text-slate-400 hover:text-blue-400">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/shreyansh-dwivedi-684b67274/" target="_blank" rel="noopener noreferrer" className="glow-arrow text-slate-400 hover:text-blue-400">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:nikkudwivedi4942@gmail.com?subject=Hi%20Shreyansh&body=Hello%20Shreyansh" className="glow-arrow text-slate-400 hover:text-blue-400">
                  <Mail size={28} />
                </a>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-64 h-64 mx-auto float-animation">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 flex items-center justify-center text-9xl">
                  💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/30 border-y border-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-400" size={36} />
            About My Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-box p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.label}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">◆</span>
                  <div>
                    <p className="font-semibold text-white">Full Stack Expertise</p>
                    <p className="text-sm text-slate-400">End-to-end development with React, Node.js, Express, MongoDB - from UI to database</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">◆</span>
                  <div>
                    <p className="font-semibold text-white">Strong DSA Foundation</p>
                    <p className="text-sm text-slate-400">LeetCode rating 1582 (Top 25%); consistent problem-solving practice</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">◆</span>
                  <div>
                    <p className="font-semibold text-white">Modern Tech Stack</p>
                    <p className="text-sm text-slate-400">React.js, Next.js, Node.js, Express, Django, MongoDB, MySQL, Firebase</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">◆</span>
                  <div>
                    <p className="font-semibold text-white">Production-Ready Code</p>
                    <p className="text-sm text-slate-400">Built and deployed full-stack applications with authentication, real-time features, and optimized performance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">◆</span>
                  <div>
                    <p className="font-semibold text-white">Clean & Maintainable Code</p>
                    <p className="text-sm text-slate-400">Focus on readability, proper error handling, and writing code that others can easily understand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">◆</span>
                  <div>
                    <p className="font-semibold text-white">Competitive Programming</p>
                    <p className="text-sm text-slate-400">Top 0.1% at Graph Camp 2024; selected from 80,000+ applicants for advanced training</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-400/20 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-blue-400">Experience Highlights</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white">FUTURE INTERNS - Full Stack Intern</p>
                  <p className="text-sm text-slate-400 mt-1">Built complete web applications from frontend to backend:</p>
                  <ul className="text-sm text-blue-300 mt-2 space-y-1">
                    <li>✓ Responsive React frontends with modern UI/UX</li>
                    <li>✓ RESTful APIs with Node.js and Express</li>
                    <li>✓ Database design and optimization (MongoDB, MySQL)</li>
                    <li>✓ Performance improvements and deployment</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-blue-400/20">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">1582</p>
                  <p className="text-slate-400 text-xs mt-1">LeetCode (Top 25%)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">80K+</p>
                  <p className="text-slate-400 text-xs mt-1">Graph Camp Applicants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-blue-400" size={36} />
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card-hover bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 h-48 flex items-center justify-center text-7xl border-b border-slate-700/50">
                  {project.image}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
                    <span className="text-xs font-semibold text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded-full">{project.impact}</span>
                  </div>
                  <p className="text-slate-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="glow-arrow w-full flex items-center justify-between text-slate-300 hover:text-blue-400 transition-colors mb-4 py-2 font-medium"
                  >
                    <span>Key Features</span>
                    <ChevronRight size={18} className={`transform transition-all duration-300 ${expandedProject === project.id ? 'rotate-90' : ''}`} />
                  </button>

                  {expandedProject === project.id && (
                    <ul className="mb-4 space-y-2 text-slate-400 text-sm">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">→</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex gap-4">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-all flex items-center justify-center gap-2 font-medium">
                      <ExternalLink size={18} />
                      Demo
                    </a>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1 border border-blue-400 hover:bg-blue-400/10 py-2 rounded-lg transition-all flex items-center justify-center gap-2 font-medium">
                      <Github size={18} />
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/30 border-y border-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-lg hover:border-blue-400/30 transition-all">
                <h3 className="text-lg font-bold text-blue-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="skill-item px-3 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-blue-400" size={36} />
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="achievement-card p-6 rounded-lg">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-blue-400 mb-2">{achievement.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{achievement.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{achievement.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/30 border-t border-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-slate-400 text-lg mb-12">
            Looking for SDE and Full Stack Developer opportunities. Let's talk about building scalable, user-friendly applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="tel:+918318946679" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors text-lg font-medium">
              <Mail size={24} />
              +91 8318946679
            </a>
            <a href="mailto:nikkudwivedi4942@gmail.com?subject=Hi%20Shreyansh&body=Hello%20Shreyansh" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors text-lg font-medium">
              <Mail size={24} />
              nikkudwivedi4942@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href="https://github.com/Shreyansh3108" target="_blank" rel="noopener noreferrer" className="glow-arrow text-slate-400 hover:text-blue-400">
              <Github size={36} />
            </a>
            <a href="https://www.linkedin.com/in/shreyansh-dwivedi-684b67274/" target="_blank" rel="noopener noreferrer" className="glow-arrow text-slate-400 hover:text-blue-400">
              <Linkedin size={36} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-8 px-4 text-center text-slate-500">
        <p>© 2025 Shreyansh Dwivedi. Crafted with precision.</p>
      </footer>
    </div>
  );
}