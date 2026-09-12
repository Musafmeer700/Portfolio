import { Download, Mail } from 'lucide-react';
import instagram from '../assets/instagram.png';
import Linkedin1 from '../assets/Linkedin1.png';
import github from '../assets/github.png';
import hero1 from '../assets/hero1.png';
import hi from '../assets/hi.png';
import CV from '../assets/CV.pdf';

const HeroSection = ({ darkMode }) => {
    const socialIcons = [
        { icon: instagram, alt: 'Instagram', link: 'https://www.instagram.com/musafmeer7'},
        { icon: github, alt: 'github', link: 'https://github.com/Musafmeer700',},
        { icon: Linkedin1, alt: 'linkedin', link: 'https://www.linkedin.com/in/musafmeer70'},
    ];

    const theme = {
        textPrimary: darkMode ? 'text-white' : 'text-gray-900',
        textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
        accentGradient: 'from-orange-500 via-amber-500 to-orange-400',
        blobColor: darkMode ? 'bg-orange-600' : 'bg-orange-400',
    };

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col items-center justify-center'>
            {/* Background Decorative Blobs */}
            <div className={`absolute -top-20 -left-20 w-72 h-72 ${theme.blobColor} rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse`} />
            <div className={`absolute bottom-0 -right-20 w-80 h-80 ${theme.blobColor} rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse delay-700`} />

            <section id='home' data-aos='fade-up' data-aos-delay='250' className='relative z-10 w-full'>
                <div className='container mx-auto flex px-6 sm:px-12 lg:px-20 py-20 flex-col lg:flex-row items-center justify-between'>
                    
                    {/* Left Content */}
                    <div className='lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left'>
                        
                        {/* Social Icons */}
                        <div className='flex justify-center lg:justify-start gap-5 mb-8 '>
                            {socialIcons.map((social, idx) => (
                                <a key={idx}
                                   href={social.link}
                                   target='_blank'
                                   rel="noreferrer"
                                   data-aos="zoom-in"
                                   data-aos-delay={`${400 + idx * 100}`}
                                   className='group  relative p-2 rounded-xl transition-all duration-300 hover:bg-orange-500/10'
                                >
                                    <img src={social.icon} alt={social.alt} 
                                         className={`w-7 h-7 ${social.scale ? `scale-${social.scale}` : ''} sm:w-8 sm:h-8 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] ${!darkMode && 'grayscale hover:grayscale-0'}`} />
                                </a>
                            ))}
                        </div>

                        {/* Heading */}
                        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 ${theme.textPrimary}`}
                            data-aos='fade-up' data-aos-delay='500'>
                            Hi, I'm <span className={`bg-linear-to-r ${theme.accentGradient} bg-clip-text text-transparent`}>Musaf Iftikhar</span>
                        </h1>

                        <p className={`text-lg sm:text-xl leading-relaxed max-w-lg mb-10 font-medium ${theme.textSecondary}`}
                           data-aos='fade-up' data-aos-delay='600'>
                            MERN Stack Developer with experience across frontend and backend — I've built everything from consultancy platforms to immersive VR learning tools, and shipped features for real client products in production.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto' data-aos='fade-up' data-aos-delay='700'>
                            <a href={CV} download className='w-full sm:w-auto'>
                                <button className='group relative w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95'>
                                    <Download className='w-5 h-5 mr-2 group-hover:animate-bounce' />
                                    Download CV
                                </button>
                            </a>
                            
                            <a href="#contact" className="w-full sm:w-auto">
                                <button className={`w-full sm:w-auto flex items-center justify-center px-8 py-4 font-bold rounded-2xl border-2 border-orange-500/50 backdrop-blur-sm transition-all duration-300 hover:bg-orange-500 hover:text-white ${theme.textPrimary}`}>
                                    <Mail className='w-5 h-5 mr-2' />
                                    Contact Me
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className='lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative' data-aos='fade-left' data-aos-delay='400'>
                        <div className='relative group'>
                            {/* Animated ring around image */}
                            {!darkMode && (<div className='absolute -inset-1 bg-linear-to-r from-orange-500 to-amber-500 rounded-full blur opacity-25 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
                            )}
                            <div className='relative bg-transparent rounded-3xl p-2'>
                                <img src={hero1} alt="Musaf Iftikhar" 
                                     className='w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-100 object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]' />
                            </div>

                            {/* Floating Hi Icon */}
                            <img src={hi} alt="Hi Icon" 
                                 className='absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 animate-bounce drop-shadow-2xl z-20' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;