import { useState } from "react";
import { FaBars, FaPhone, FaWhatsapp, FaMoon, FaSun } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 dark:bg-background/90 border-b border-border transition-all duration-300">
      {/* Main Navigation Bar */}
      <div className="bg-background/95 dark:bg-background/95 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: Brand Name */}
            <div className="flex items-center group">
              <h1 className="text-xl lg:text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-primary cursor-pointer">
                OLAREWAJU DAVID
              </h1>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2" aria-label="Main navigation">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-all duration-300 relative group"
                aria-label="Navigate to Home section"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
                aria-label="Navigate to Services section"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("my-work")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
                aria-label="Navigate to My Work portfolio section"
              >
                My Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
                aria-label="Navigate to About section"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
                aria-label="Navigate to Contact section"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            </nav>

            {/* Right: Contact Info, Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative overflow-hidden group"
                  aria-label="Toggle theme"
                >
                  <FaSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              )}
              
              <div className="hidden md:flex items-center gap-2 text-sm text-foreground">
                <FaPhone className="h-4 w-4" />
                <a href="tel:+2349063339281" className="hover:text-primary transition-colors">
                  +234 906 333 9281
                </a>
              </div>
              
              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <FaBars className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-6 mt-8">
                    <h2 className="text-xl font-bold text-foreground">OLAREWAJU DAVID</h2>
                    
                    <nav className="flex flex-col gap-4">
                      <button
                        onClick={() => scrollToSection("hero")}
                        className="text-left text-lg font-medium text-primary transition-colors"
                      >
                        Home
                      </button>
                      <button
                        onClick={() => scrollToSection("services")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Services
                      </button>
                      <button
                        onClick={() => scrollToSection("my-work")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        My Work
                      </button>
                      <button
                        onClick={() => scrollToSection("about")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        About
                      </button>
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Contact
                      </button>
                    </nav>
                    
                    <div className="pt-4 border-t">
                      <div className="space-y-3 mb-4">
                        {mounted && (
                          <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                          >
                            {theme === "dark" ? (
                              <>
                                <FaSun className="h-4 w-4" />
                                <span>Light Mode</span>
                              </>
                            ) : (
                              <>
                                <FaMoon className="h-4 w-4" />
                                <span>Dark Mode</span>
                              </>
                            )}
                          </button>
                        )}
                        <a 
                          href="tel:+2349063339281"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <FaPhone className="h-4 w-4" />
                          <span>+234 906 333 9281</span>
                        </a>
                        <a 
                          href="https://wa.me/2349063339281"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors"
                        >
                          <FaWhatsapp className="h-4 w-4" />
                          <span>Message on WhatsApp</span>
                        </a>
                      </div>
                      <Button
                        onClick={() => scrollToSection("contact")}
                        className="w-full"
                      >
                        Get started
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
