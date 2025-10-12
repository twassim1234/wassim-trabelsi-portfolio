import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Internships", href: "#internships" },
  { name: "Extra-curricular", href: "#Other" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative">
              <span className="text-glow text-foreground"> Wassim </span>{" "}
              Trabelsi
            </span>
          </a>

          {/* Desktop nav (lg and above) */}
          <div className="hidden lg:flex lg:space-x-10 space-x-4 items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile controls (md/sm) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay menu (md & sm) */}
      {/* Overlay menu (md & sm) */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 lg:hidden backdrop-blur-xl",
          isMenuOpen
            ? "opacity-100 pointer-events-auto bg-background/80"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)} // Close menu on overlay click
      >
        <div
          className="flex flex-col items-center space-y-8 text-xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the background of the inner box
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/90 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)} // ✅ Close menu when clicking a link
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
