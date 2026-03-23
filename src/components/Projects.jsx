import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce Platform",
      desc: "A full-stack shopping experience with real-time cart logic and secure checkout.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      desc: "Personalized health tracking with real-time data visualization and cloud sync.",
      image: project2,
      tags: ["React Native", "Firebase"],
    },
    {
      id: 3,
      title: "Content Generator",
      desc: "AI-powered tool for generating high-quality marketing copy and blog posts.",
      image: project3,
      tags: ["Python", "OpenAI"],
    },
    {
      id: 4,
      title: "Admin Dashboard",
      desc: "Interactive analytics dashboard with complex data filtering and reporting.",
      image: project4,
      tags: ["Vue.js", "Chart.js"],
    },
    {
      id: 5,
      title: "Task Management",
      desc: "Collaborative project management tool with Kanban boards and deadline tracking.",
      image: project5,
      tags: ["Laravel", "Vue.js"],
    },
    {
      id: 6,
      title: "Skill Swap",
      desc: "A collaborative platform for developers to trade skills and build projects together.",
      image: project6,
      tags: ["Next.js", "Three.js", "MongoDB"],
    },
  ];

  const cardBg = darkMode ? "linear-gradient(to bottom right, #1a1a1a, #111111)" : "linear-gradient(to bottom right, #ffffff, #faf9fb)";

  return (
    <section id="projects" className="relative py-24 px-32 overflow-hidden">
      {/* Background Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6" style={{ color: darkMode ? "white" : "#1f2937" }}>
            My <span style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>Projects</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg opacity-80" style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}>
            A showcase of my technical journey and creative solutions.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ background: cardBg, borderColor: darkMode ? "rgba(255,255,255,0.1)" : "#757575" }}
              className="cursor-pointer group rounded-3xl border-4xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/10 border-b-4 hover:border-orange-500/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 tracking-tight" style={{ color: darkMode ? "white" : "#1f2937" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 opacity-70" style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "rgba(255,255,255,0.05)" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? "#262626" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>

                  <a
                    href="#"
                    style={{ background: "linear-gradient(to right, #f97316, #f59e0b)" }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "linear-gradient(to right, #f97316, #f59e0b)" }}
            className="inline-flex items-center gap-3 px-10 py-4 font-bold text-white rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300"
            data-aos="zoom-in"
          >
            <FaGithub className="text-xl" />
            <span>Explore More on GitHub</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;