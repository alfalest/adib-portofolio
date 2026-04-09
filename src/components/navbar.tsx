import { useState } from "react";
import NavLink from "./menu";
import Theme from "./theme";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav
      className="glass sticky top-0 z-50 mx-auto w-full transition-all duration-300 px-4 md:px-8"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight"
          >
            <NavLink to="/">
              <span className="text-gradient">Muhammad Adib Alfaini Afifi</span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <Theme />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Theme />
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  onClick={() => setIsOpen(false)}
                >
                  <NavLink to={item.to}>{item.label}</NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
