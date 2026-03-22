import laravel from '../assets/laravel.png'
import framer_motion from '../assets/framer_motion.png'
import vue from '../assets/vue.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import firebase from '../assets/firebase.png'
import python from '../assets/python.png'
import vite from '../assets/vite.png'

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "laravel", icon: laravel, level: 95, color: "from-orange-500 to-amber-500 " },
    { name: "framer motion", icon: framer_motion, level: 90, color: "from-blue-500 to-cyan-500 " },
    { name: "vue", icon: vue, level: 88, color: "from-yellow-500 to-amber-500 " },
    { name: "React", icon: react, level: 85, color: "from-cyan-500 to-blue-500 " },
    { name: "Tailwind CSS", icon: tailwind, level: 92, color: "from-teal-500 to-cyan-500 " },
    { name: "Firebase", icon: firebase, level: 92, color: "from-green-500 to-emerald-500 " },
    { name: "python", icon: python, level: 75, color: "from-blue-500 to-indigo-500 " },
    { name: "vite", icon: vite, level: 85, color: "from-red-500 to-orange-500 " },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
    >
      <div className="container px-5 mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1
            className="sm:text-5xl text-4xl font-extrabold title-font mb-4"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >Skills</span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed opacity-80"
            style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
          >
            A technical breakdown of my proficiency in various frameworks and languages.
          </p>
        </div>

        <div className="flex flex-wrap -m-4" data-aos="fade-up" data-aos-delay="200">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2 w-full"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 100}`}
            >
              <div
                style={{
                  borderColor: darkMode ? "rgba(255,255,255,0.1)" : "#e5e7eb",
                }}
                className={`h-full p-8 rounded-4xl border transition-all duration-500 ${darkMode ? 'bg-linear-to-br from-[#1a1a1a] to-[111111]' : 'bg-linear-to-br from-orange-500/10 via-orange-700/10 to-amber-500/10'}
                           hover:-translate-y-3 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] 
                           hover:border-orange-500/50`}
              >
                {/* Header: Icon + Name */}
                <div className="flex items-center mb-8">
                  <div
                    style={{
                      background: darkMode
                        ? "rgba(255,255,255,0.05)"
                        : "#f3f4f6",
                    }}
                    className="w-14 h-14 rounded-2xl p-3 flex items-center justify-center 
                               group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <h3
                    className="text-xl font-bold ml-4 capitalize tracking-tight"
                    style={{ color: darkMode ? "white" : "#1f2937" }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Proficiency Label */}
                <div className="mb-3 flex justify-between items-end">
                  <span
                    className="text-xs font-bold uppercase tracking-widest opacity-60"
                    style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                  >
                    Proficiency
                  </span>
                  <span
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                    className="font-black text-lg"
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full rounded-full h-2 overflow-hidden"
                  style={{ backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "#e5e7eb" }}
                >
                  <div
                    className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Bottom Decorative Line (Matches your About style) */}
                <div className={`mt-8 pt-4 border-t ${darkMode ? "border-white/5" : "border-gray-200"}`}>
                   <div className="h-1 w-8 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500 opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;