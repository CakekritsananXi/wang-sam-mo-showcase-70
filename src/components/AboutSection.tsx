
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-tour-orange rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-tour-orange rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">เกี่ยวกับ <span className="text-tour-orange">ที่นี่วังสามหมอ</span></h2>
          <p className="text-lg text-gray-600">
            แฟนเพจที่นำเสนอเรื่องราวความเป็นไปของชุมชนวังสามหมอและพื้นที่ใกล้เคียง
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">พันธกิจของเรา</h3>
            <p className="mb-6">
              ที่นี่วังสามหมอ (Tour Der Wang) มุ่งมั่นที่จะเป็นสื่อกลางในการนำเสนอเรื่องราวของชุมชน 
              วัฒนธรรม ประเพณี และกิจกรรมที่น่าสนใจในพื้นที่วังสามหมอ เพื่อส่งเสริมการท่องเที่ยวและอนุรักษ์
              มรดกทางวัฒนธรรมของท้องถิ่น
            </p>
            
            <h3 className="text-2xl font-bold mb-4">เป้าหมายของเรา</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-tour-orange mr-2">✓</span>
                <span>นำเสนอเรื่องราวและกิจกรรมที่น่าสนใจในชุมชนวังสามหมอ</span>
              </li>
              <li className="flex items-start">
                <span className="text-tour-orange mr-2">✓</span>
                <span>ส่งเสริมการท่องเที่ยวและเศรษฐกิจในพื้นที่</span>
              </li>
              <li className="flex items-start">
                <span className="text-tour-orange mr-2">✓</span>
                <span>อนุรักษ์และเผยแพร่วัฒนธรรมประเพณีท้องถิ่น</span>
              </li>
              <li className="flex items-start">
                <span className="text-tour-orange mr-2">✓</span>
                <span>สร้างชุมชนออนไลน์ที่เข้มแข็งสำหรับคนในพื้นที่และผู้สนใจ</span>
              </li>
            </ul>
            
            <Button className="bg-tour-orange hover:bg-tour-orange-dark">
              <Link to="https://www.facebook.com/tourderwang" target="_blank">
                ติดตามเราบนเฟซบุ๊ก
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-tour-cream p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
                  <h4 className="text-xl font-bold mb-2">10K+</h4>
                  <p className="text-sm text-gray-600">ผู้ติดตามบนโซเชียลมีเดีย</p>
                </div>
                <div className="bg-tour-cream p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
                  <h4 className="text-xl font-bold mb-2">50+</h4>
                  <p className="text-sm text-gray-600">กิจกรรมชุมชนที่สนับสนุน</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-tour-cream p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
                  <h4 className="text-xl font-bold mb-2">500+</h4>
                  <p className="text-sm text-gray-600">โพสต์นำเสนอเรื่องราวท้องถิ่น</p>
                </div>
                <div className="bg-tour-cream p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
                  <h4 className="text-xl font-bold mb-2">5+</h4>
                  <p className="text-sm text-gray-600">ปีแห่งการเล่าเรื่องราวชุมชน</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-tour-orange rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              วังสามหมอ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
