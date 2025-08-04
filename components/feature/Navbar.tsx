"use client"

import { useEffect, useState } from "react";
import { siteConfig } from "@/constant/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  
  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      // Add 'hero' to the sections if it's not already there from navLinks
      if (!sections.includes('hero')) {
        sections.unshift('hero');
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex mx-10 h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <button 
            onClick={() => scrollToSection("hero")} 
            className="flex items-center space-x-2"
          >
            <span className="font-bold text-xl">{siteConfig.businessName}</span>
          </button>
          <nav className="hidden md:flex gap-6">
            {siteConfig.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className={cn(
                  "text-sm font-medium transition-colors cursor-pointer",
                  activeSection === link.href.substring(1) ? "text-primary" : "hover:text-primary"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex gap-2 items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {siteConfig.phone}
          </Button>
   
        </div>
      </div>
    </header>
  );
}
