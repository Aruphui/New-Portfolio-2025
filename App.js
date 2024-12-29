import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, ExternalLink, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 text-white md:hidden z-50"
      >
        <Menu size={24} />
      </button>

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-20 p-2 rounded-full bg-gray-800 text-white z-50"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out z-40
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="h-full flex flex-col justify-between p-6">
          <div>
            <h1 className="text-2xl font-bold text-emerald-400 mb-2">Arup Jyoti Hui</h1>
            <h2 className="text-gray-400 mb-8">DevOps Engineer</h2>
            
            <nav>
              <ul className="space-y-4">
                {['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`group flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors
                        ${activeSection === section ? 'text-emerald-400' : ''}`}
                      onClick={() => {
                        setActiveSection(section);
                        setIsMenuOpen(false);
                      }}
                    >
                      <ChevronRight 
                        size={16}
                        className={`transform transition-transform duration-300 ${activeSection === section ? 'rotate-90' : ''}`}
                      />
                      <span className="capitalize">{section}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 flex items-center">
                <ExternalLink size={20} />
              </a>
              <a href="https://linkedin.com/in/huiarup" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 flex items-center">
                <ExternalLink size={20} />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 flex items-center">
                <ExternalLink size={20} />
              </a>
              <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-emerald-400 flex items-center">
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400 text-center">&copy; 2024 Arup Jyoti Hui</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 p-6 md:p-12">
        {/* About Section */}
        <section id="about" className={`mb-16 transform transition-all duration-700 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-emerald-400 mb-6">About</h3>
          <p className="text-lg leading-relaxed">
            Results-driven Cloud & DevOps Engineer with extensive experience in managing cloud infrastructure, implementing CI/CD pipelines, and utilizing Infrastructure as Code (IaC). Skilled in container orchestration and automation, with proficiency in a wide range of tools and technologies including Docker, Kubernetes, Terraform, Azure DevOps, Jenkins, Git, and Shell Scripting.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`mb-16 transform transition-all duration-700 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-emerald-400 mb-6">Experience</h3>
          <div className="space-y-8">
            {[
              {
                title: "DevOps Engineer",
                company: "Coforge LTD",
                period: "May, 2023 — Present",
                description: "A highly skilled Cloud & DevOps Engineer with extensive experience in designing and implementing CI/CD pipelines..."
              },
              {
                title: "Cloud & DevOps Engineer",
                company: "Wipro",
                period: "Nov, 2021 — May, 2023",
                description: "Highly proficient in Azure DevOps practices with a comprehensive understanding of Infrastructure as a Service (IaaS) and Platform as a Service (PaaS)..."
              }
            ].map((job, index) => (
              <div key={index} className="group relative pl-8 border-l-2 border-gray-700 hover:border-emerald-400 transition-colors">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-700 group-hover:bg-emerald-400 transition-colors" />
                <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
                <h5 className="text-lg text-emerald-400 mb-1">{job.company}</h5>
                <p className="text-gray-400 mb-4">{job.period}</p>
                <p className="text-base">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`mb-16 transform transition-all duration-700 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-emerald-400 mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Azure", "AWS", "Docker", "Kubernetes", "Terraform", "Azure DevOps",
              "CI/CD Pipelines", "Git", "Jenkins", "Infrastructure as Code (IaC)",
              "Monitoring and Logging", "Shell Scripting", "Ansible", "Networking", "Linux"
            ].map((skill, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`mb-16 transform transition-all duration-700 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-emerald-400 mb-6">Contact</h3>
          <div className="space-y-4">
            <a href="mailto:arupjyoti699@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors">
              <Mail size={20} />
              <span>arupjyoti699@gmail.com</span>
            </a>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone size={20} />
              <span>+91 6372809100</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin size={20} />
              <span>Bhadrak, Odisha, India</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
