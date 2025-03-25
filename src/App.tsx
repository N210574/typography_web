import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Globe, Cpu, Github, Linkedin, Mail, ExternalLink, BookOpen, Trophy, Briefcase, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Animate header text with split effect
    const headerText = headerRef.current?.querySelector('.header-text');
    const chars = headerText?.textContent?.split('');
    if (chars) {
      headerText.textContent = '';
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        headerText.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });
    }

    // About section animation
    gsap.from(aboutRef.current?.querySelectorAll('.about-item'), {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center+=100"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Skills animation
    gsap.from(skillsRef.current?.querySelectorAll('.skill-item'), {
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top center+=100"
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });

    // Projects animation
    gsap.from(projectsRef.current?.querySelectorAll('.project-item'), {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top center+=100"
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out"
    });

    // Experience animation
    gsap.from(experienceRef.current?.querySelectorAll('.experience-item'), {
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top center+=100"
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Contact animation
    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center+=100"
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          ref={headerRef}
          className="text-center z-20 relative"
        >
          <h1 className="header-text text-8xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            JOHN DOE
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Full Stack Developer • UI/UX Designer • Tech Enthusiast
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:contact@example.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        {/* Animated background */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(76,29,149,0.15)_0%,rgba(219,39,119,0.15)_100%)]"></div>
        </div>
      </div>

      {/* About Section */}
      <div 
        ref={aboutRef}
        className="relative py-20 bg-gradient-to-b from-black to-purple-900/30"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="about-item relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-[400px] object-cover rounded-xl relative z-10"
              />
            </div>
            <div className="about-item flex flex-col justify-center">
              <p className="text-xl text-white mb-6">
                Hi, I'm John! I'm a passionate full-stack developer with 5+ years of experience in creating beautiful and functional web applications. I specialize in React, Node.js, and modern web technologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-white">
                  <BookOpen className="text-purple-400" />
                  <span>Computer Science, MIT</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Trophy className="text-purple-400" />
                  <span>10+ Awards</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Briefcase className="text-purple-400" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <GraduationCap className="text-purple-400" />
                  <span>3.9 GPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div 
        ref={skillsRef}
        className="relative py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Frontend", skills: ["React", "Vue", "TypeScript", "Tailwind"] },
              { icon: Cpu, title: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "AWS"] },
              { icon: Palette, title: "Design", skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] },
              { icon: Globe, title: "Other", skills: ["Git", "Docker", "CI/CD", "Agile"] }
            ].map((category, index) => (
              <div key={index} className="skill-item p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
                <category.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-white">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div 
        ref={projectsRef}
        className="relative py-20 bg-gradient-to-b from-purple-900/30 to-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "E-commerce Platform",
                desc: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                tech: ["React", "Node.js", "PostgreSQL", "AWS"],
                link: "https://github.com"
              },
              {
                title: "AI Dashboard",
                desc: "Real-time analytics dashboard with machine learning capabilities",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                tech: ["Python", "TensorFlow", "React", "D3.js"],
                link: "https://github.com"
              },
              {
                title: "Social Platform",
                desc: "A modern social media platform with real-time features",
                image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
                tech: ["Vue.js", "Firebase", "WebSocket", "Redis"],
                link: "https://github.com"
              },
              {
                title: "Mobile App",
                desc: "Cross-platform mobile application for fitness tracking",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
                tech: ["React Native", "GraphQL", "Node.js", "MongoDB"],
                link: "https://github.com"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="project-item relative overflow-hidden rounded-xl group border border-purple-500/20"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/30 rounded-full text-sm text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div 
        ref={experienceRef}
        className="relative py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-white">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                company: "Tech Giant Inc.",
                role: "Senior Full Stack Developer",
                period: "2021 - Present",
                desc: "Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines."
              },
              {
                company: "Startup Hub",
                role: "Frontend Developer",
                period: "2019 - 2021",
                desc: "Developed responsive web applications, improved performance by 40%, and implemented modern UI/UX practices."
              },
              {
                company: "Digital Agency",
                role: "UI/UX Designer",
                period: "2018 - 2019",
                desc: "Created user-centered designs, conducted user research, and developed interactive prototypes."
              }
            ].map((exp, index) => (
              <div key={index} className="experience-item bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">{exp.company}</h3>
                    <p className="text-xl text-white">{exp.role}</p>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-white">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div 
        ref={contactRef}
        className="relative py-20 bg-gradient-to-b from-purple-900/30 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-purple-500/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-xl text-white mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:contact@example.com"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold hover:scale-105 transition-transform flex items-center space-x-2 text-white"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
              <a 
                href="/resume.pdf"
                className="px-8 py-4 border-2 border-purple-500 rounded-full text-lg font-semibold hover:bg-purple-500/20 transition-colors flex items-center space-x-2 text-white"
              >
                <BookOpen className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;