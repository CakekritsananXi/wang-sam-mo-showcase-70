
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/80a7511a-6f08-4ed5-87dd-b0f10aa7ce51.png"
            alt="ที่นี่วังสามหมอ Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-tour-orange hidden sm:inline">ที่นี่วังสามหมอ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-tour-orange transition-colors">
            หน้าหลัก
          </Link>
          <Link to="/projects" className="font-medium hover:text-tour-orange transition-colors">
            โครงการ
          </Link>
          <Link to="/gallery" className="font-medium hover:text-tour-orange transition-colors">
            แกลเลอรี่
          </Link>
          <Link to="/team" className="font-medium hover:text-tour-orange transition-colors">
            ทีมงาน
          </Link>
          <Link to="/contact" className="font-medium hover:text-tour-orange transition-colors">
            ติดต่อ
          </Link>
          <Button className="bg-tour-orange hover:bg-tour-orange-dark">
            <Link to="https://www.facebook.com/tourderwang" target="_blank">
              ติดตามเรา
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="px-4 py-2 hover:bg-tour-orange/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              หน้าหลัก
            </Link>
            <Link
              to="/projects"
              className="px-4 py-2 hover:bg-tour-orange/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              โครงการ
            </Link>
            <Link
              to="/gallery"
              className="px-4 py-2 hover:bg-tour-orange/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              แกลเลอรี่
            </Link>
            <Link
              to="/team"
              className="px-4 py-2 hover:bg-tour-orange/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ทีมงาน
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-tour-orange/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ติดต่อ
            </Link>
            <Button className="bg-tour-orange hover:bg-tour-orange-dark mx-4">
              <Link to="https://www.facebook.com/tourderwang" target="_blank">
                ติดตามเรา
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
