import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

// --- Sub-components for Cleanliness ---

const NavLink = ({ item, active, onClick, colors }) => (
  <a
    href={item.link}
    onClick={() => onClick(item.name)}
    className="relative px-3 py-2 group"
  >
    <motion.span
      className={`font-medium transition-colors duration-300 ${
        active ? colors.textActive : `${colors.textSecondary} group-hover:text-orange-500`
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.name}
    </motion.span>
    {active && (
      <motion.div
        layoutId="navbar-indicator"
        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
  </a>
);

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const colors = darkMode 
    ? {
        navBg: "bg-gray-900/80 border-gray-800",
        textPrimary: "text-white",
        textSecondary: "text-gray-400",
        textActive: "text-orange-400",
        indicator: "from-orange-500 to-amber-500",
        button: "from-orange-500 to-amber-600",
      }
    : {
        navBg: "bg-white/80 border-orange-100",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        textActive: "text-orange-600",
        indicator: "from-orange-400 to-amber-400",
        button: "from-orange-500 to-amber-500",
      };

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 top-4 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex flex-col items-center w-full max-w-5xl ${colors.navBg} backdrop-blur-xl rounded-2xl border shadow-2xl transition-colors duration-500`}
      >
        <div className="flex items-center justify-between w-full px-6 py-3">
          {/* Logo */}
          <motion.a href="/" whileHover={{ scale: 1.05 }} className="flex items-center">
            <span className={`text-2xl font-black tracking-tighter ${colors.textPrimary}`}>
              PORTFOLIO<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                item={item} 
                active={activeSection === item.name.toLowerCase()} 
                onClick={handleNavClick}
                colors={colors}
              />
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700 text-yellow-400' : 'bg-orange-50 border-orange-100 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`hidden md:block px-6 py-2.5 font-bold rounded-xl bg-linear-to-r ${colors.button} text-white shadow-lg shadow-orange-500/20`}
            >
              Hire Me
            </motion.a>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-500"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full lg:hidden overflow-hidden border-t border-gray-100/10"
            >
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl font-semibold text-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-100'} ${
                      activeSection === item.name.toLowerCase() 
                        ? `bg-linear-to-r ${colors.button} text-white` 
                        : colors.textSecondary
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;