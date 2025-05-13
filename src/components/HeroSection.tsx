
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-tour-cream to-white pt-16">
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-tour-orange">ที่นี่</span>
              <br />
              วังสามหมอ
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              เรื่องราวความเป็นไปของชุมชนวังสามหมอ ตำบลวังสามหมอ อำเภอวังสามหมอ จังหวัดอุดรธานี
              ติดตามเรื่องราวและกิจกรรมที่น่าสนใจในพื้นที่ได้ที่นี่
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-tour-orange hover:bg-tour-orange-dark">
                <Link to="/projects">ดูโครงการ</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-tour-orange text-tour-orange hover:bg-tour-orange hover:text-white">
                <Link to="/gallery">แกลเลอรี่</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-tour-orange">10K+</p>
                <p className="text-sm text-gray-600">ผู้ติดตาม</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-tour-orange">500+</p>
                <p className="text-sm text-gray-600">โพสต์</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-tour-orange">50+</p>
                <p className="text-sm text-gray-600">กิจกรรม</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 p-4">
              <img
                src="/lovable-uploads/80a7511a-6f08-4ed5-87dd-b0f10aa7ce51.png"
                alt="ที่นี่วังสามหมอ Logo"
                className="mx-auto w-full max-w-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-tour-orange text-white px-6 py-4 rounded-lg shadow-lg transform rotate-3">
                <p className="text-lg font-bold">วังสามหมอ</p>
                <p>อุดรธานี</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tour-orange rounded-full opacity-10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
