import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectCard from "@/components/ProjectCard";
import StatsCard from "@/components/StatsCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialMediaBar from "@/components/SocialMediaBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  // Sample project data
  const featuredProjects = [{
    id: 1,
    title: "เทศกาลอาหารวังสามหมอ",
    description: "งานเทศกาลอาหารพื้นถิ่นที่รวบรวมร้านอาหารและเมนูเด็ดจากชุมชนวังสามหมอ สร้างรายได้ให้ชุมชนกว่า 500,000 บาท",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://www.facebook.com/tourderwang",
    date: "15 มีนาคม 2023",
    category: "เทศกาล"
  }, {
    id: 2,
    title: "ตลาดน้ำวังสามหมอ",
    description: "โครงการฟื้นฟูและพัฒนาตลาดน้ำวังสามหมอ ให้เป็นแหล่งท่องเที่ยวและจำหน่ายสินค้าพื้นเมืองของชุมชน",
    imageUrl: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://www.facebook.com/tourderwang",
    date: "10 มกราคม 2023",
    category: "การท่องเที่ยว"
  }, {
    id: 3,
    title: "อนุรักษ์ป่าชุมชนวังสามหมอ",
    description: "โครงการปลูกป่าและอนุรักษ์พื้นที่ป่าชุมชน เพื่อฟื้นฟูระบบนิเวศและสร้างแหล่งอาหารให้ชุมชน",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://www.facebook.com/tourderwang",
    date: "5 มิถุนายน 2023",
    category: "สิ่งแวดล้อม"
  }];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <SocialMediaBar />

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />

        {/* Featured Projects Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                โครงการ<span className="text-tour-orange">โดดเด่น</span>
              </h2>
              <p className="text-lg text-gray-600">
                โครงการและกิจกรรมล่าสุดที่เราได้จัดขึ้นเพื่อชุมชนวังสามหมอ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map(project => <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.imageUrl} link={project.link} date={project.date} category={project.category} />)}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-tour-orange text-tour-orange hover:bg-tour-orange hover:text-white">
                <Link to="/projects">ดูโครงการทั้งหมด</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-tour-orange text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10" />
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">สถิติของเรา</h2>
              <p className="text-lg opacity-80">
                ผลงานและความสำเร็จที่เราได้สร้างร่วมกับชุมชน
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-4xl font-bold">100K+</h3>
                <p>ผู้ติดตาม</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-4xl font-bold">500+</h3>
                <p>โพสต์</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-4xl font-bold">50+</h3>
                <p>กิจกรรม</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-4xl font-bold">100K+</h3>
                <p>การมีส่วนร่วม</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                แกลเลอรี่<span className="text-tour-orange">ภาพ</span>
              </h2>
              <p className="text-lg text-gray-600">
                ภาพกิจกรรมและความประทับใจจากโครงการต่างๆ ของเรา
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="relative overflow-hidden aspect-square group">
                  <img src={`https://picsum.photos/400/400?random=${i}`} alt={`Gallery image ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>)}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-tour-orange text-tour-orange hover:bg-tour-orange hover:text-white">
                <Link to="/gallery">ดูแกลเลอรี่ทั้งหมด</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-tour-orange/10">
          <div className="container mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    สนใจร่วมงานกับเรา?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    หากคุณสนใจที่จะร่วมงานกับเรา หรือมีข้อเสนอแนะใดๆ สามารถติดต่อเราได้ง่ายๆ ผ่านแบบฟอร์มติดต่อ
                  </p>
                  <Button className="bg-tour-orange hover:bg-tour-orange-dark">
                    <Link to="/contact">ติดต่อเรา</Link>
                  </Button>
                </div>
                <div className="md:flex-1 flex justify-center">
                  <img src="/lovable-uploads/80a7511a-6f08-4ed5-87dd-b0f10aa7ce51.png" alt="ที่นี่วังสามหมอ Logo" className="h-40 md:h-48 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;