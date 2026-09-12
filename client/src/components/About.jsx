import about from "../assets/about.png";

const About = ({ darkMode }) => {
    const stats = [
        { label: "Education", value: "Bachelors", delay: 600 },
        { label: "Experience", value: "10 Mon+", delay: 650 },
        { label: "Projects", value: "10+", delay: 700 },
    ];

    return (
        <section
            id="about"
            className={`relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-20 `}
        >
            {/* Subtle Background Accents */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left: Image Section */}
                <figure
                    data-aos="fade-right"
                    className="relative flex justify-center lg:justify-start order-2 lg:order-1"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-105 lg:h-105">
                        {/* Decorative Background Shape */}
                        {/* <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-[2rem] rotate-6 scale-105 opacity-20 animate-pulse" /> */}

                        {/* Image Container with Border */}
                        <div className="relative h-full w-full rounded-4xl overflow-hidden  transition-transform duration-500 hover:rotate-3">
                            <img
                                src={about}
                                alt="About Musaf"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Experience Badge */}
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="800"
                            className="cursor-pointer absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-orange-500/20 backdrop-blur-md"
                        >
                            <p className="text-orange-500 font-bold text-2xl leading-none">
                                100%
                            </p>
                            <p
                                className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                            >
                                Dedication
                            </p>
                        </div>
                    </div>
                </figure>

                {/* Right: Content Section */}
                <article className="lg:pl-8 order-1 lg:order-2">
                    <header data-aos="fade-up">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wide text-orange-500 uppercase bg-orange-500/10 rounded-full">
                            Who I Am
                        </span>
                        <h2
                            className={`text-4xl lg:text-6xl font-extrabold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}
                        >
                            Engineering{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                                Digital Solutions
                            </span>
                        </h2>
                    </header>

                    <p
                        className={`text-lg leading-relaxed mb-10 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        I am a Software Engineer currently working as a Junior
                        Backend Engineer at
                        <span className="text-orange-500 font-medium">
                            {" "}
                            Robotics World
                        </span>
                        , specializing in the MERN stack across both backend and
                        frontend. I've built full-stack applications like
                        <span className="text-orange-500 font-medium">
                            {" "}
                            Bridgexis
                        </span>
                        , a consultancy platform for abroad study guidance, and
                        immersive platforms like
                        <span className="text-orange-500 font-medium">
                            {" "}
                            VR Labs
                        </span>
                        , a virtual reality lab simulation built for students.
                        My focus is always on clean code and scalable
                        architecture.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-10">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={stat.delay}
                                className={`p-4 rounded-2xl border ${
                                    darkMode
                                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                                        : "bg-gray-100 border-gray-200 hover:bg-gray-200"
                                } transition-colors duration-300 cursor-pointer`}
                            >
                                <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">
                                    {stat.value}
                                </div>
                                <div
                                    className={`text-[10px] sm:text-xs uppercase tracking-widest font-semibold ${
                                        darkMode
                                            ? "text-gray-500"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-300 bg-orange-500 rounded-full hover:bg-orange-600 shadow-lg shadow-orange-500/25 active:scale-95"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        Get In Touch
                        <svg
                            className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </article>
            </div>
        </section>
    );
};

export default About;
