import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  // Theme constants
  const bgColor = darkMode 
    ? "linear-gradient(to bottom, #0f0f0f, #050505)" 
    : "linear-gradient(to bottom, #ffffff, #f3f4f6)";
  const textColor = darkMode ? "text-gray-400" : "text-gray-600";
  const iconBg = darkMode ? "bg-white/5" : "bg-gray-100";

  return (
    <footer
      style={{
        background: bgColor,
        borderColor: darkMode ? "rgba(255,255,255,0.05)" : "#e5e7eb",
      }}
      className="border-t pt-16 pb-8"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-black tracking-tighter mb-2"
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              MUSAF IFTIKHAR.
            </h3>
            <p className={`text-sm font-medium tracking-widest uppercase opacity-70 ${textColor}`}>
              Software Engineer & MERN Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { Icon: FaGithub, href: "https://github.com/Musafmeer700" },
              { Icon: FaLinkedin, href: "www.linkedin.com/in/musaf-iftikhar-034791240" },
              { Icon: FaTwitter, href: "https://twitter.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-lg hover:shadow-orange-500/20 
                  group border border-transparent hover:border-orange-500/30 ${iconBg}`}
              >
                <social.Icon className={`text-xl transition-colors duration-300 group-hover:text-orange-500 ${darkMode ? "text-white" : "text-gray-700"}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`w-full h-px mb-8 ${darkMode ? "bg-white/5" : "bg-gray-200"}`} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-xs font-bold tracking-widest uppercase opacity-50 ${textColor}`}>
            © {currentYear} All Rights Reserved
          </p>
          
          <div className={`text-xs font-bold tracking-widest uppercase flex items-center gap-2 ${textColor}`}>
            <span>Made with</span>
            <FaHeart className="text-orange-500 animate-pulse" />
            <span>by</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Musaf Iftikhar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;