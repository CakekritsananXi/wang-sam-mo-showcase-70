
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialMediaBar from "@/components/SocialMediaBar";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "เทศกาลอาหารวังสามหมอ",
      description:
        "งานเทศกาลอาหารพื้นถิ่นที่รวบรวมร้านอาหารและเมนูเด็ดจากชุมชนวังสามหมอ สร้างรายได้ให้ชุมชนกว่า 500,000 บาท",
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "15 มีนาคม 2023",
      category: "เทศกาล",
      impact: "มีผู้เข้าร่วมงานกว่า 5,000 คน และสร้างรายได้ให้ชุมชน 500,000+ บาท",
    },
    {
      id: 2,
      title: "ตลาดน้ำวังสามหมอ",
      description:
        "โครงการฟื้นฟูและพัฒนาตลาดน้ำวังสามหมอ ให้เป็นแหล่งท่องเที่ยวและจำหน่ายสินค้าพื้นเมืองของชุมชน",
      imageUrl: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "10 มกราคม 2023",
      category: "การท่องเที่ยว",
      impact: "ดึงดูดนักท่องเที่ยวกว่า 1,000 คนต่อสัปดาห์ สร้างรายได้ให้ผู้ขายในชุมชน",
    },
    {
      id: 3,
      title: "อนุรักษ์ป่าชุมชนวังสามหมอ",
      description:
        "โครงการปลูกป่าและอนุรักษ์พื้นที่ป่าชุมชน เพื่อฟื้นฟูระบบนิเวศและสร้างแหล่งอาหารให้ชุมชน",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "5 มิถุนายน 2023",
      category: "สิ่งแวดล้อม",
      impact: "ปลูกต้นไม้ใหม่กว่า 1,000 ต้น และฟื้นฟูพื้นที่ป่า 20 ไร่",
    },
    {
      id: 4,
      title: "ประเพณีบุญบั้งไฟวังสามหมอ",
      description:
        "การจัดงานประเพณีบุญบั้งไฟประจำปี เพื่อสืบสานวัฒนธรรมและประเพณีท้องถิ่นให้คงอยู่",
      imageUrl: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "2 พฤษภาคม 2023",
      category: "วัฒนธรรม",
      impact: "อนุรักษ์ประเพณีท้องถิ่น และดึงดูดผู้เข้าชมงานกว่า 10,000 คน",
    },
    {
      id: 5,
      title: "ตลาดนัดชุมชนวันอาทิตย์",
      description:
        "การจัดตลาดนัดชุมชนทุกวันอาทิตย์ เพื่อเป็นพื้นที่ให้คนในชุมชนนำสินค้ามาจำหน่าย และแลกเปลี่ยน",
      imageUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "ทุกวันอาทิตย์",
      category: "เศรษฐกิจชุมชน",
      impact: "สร้างรายได้ให้ผู้ค้าในชุมชนกว่า 100 ราย",
    },
    {
      id: 6,
      title: "ท่องเที่ยวเชิงนิเวศวังสามหมอ",
      description:
        "การพัฒนาเส้นทางท่องเที่ยวเชิงนิเวศในพื้นที่วังสามหมอ เพื่อส่งเสริมการท่องเที่ยวและอนุรักษ์ธรรมชาติ",
      imageUrl: "https://images.unsplash.com/photo-1501144979619-8b78f58de387?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "1 เมษายน 2023",
      category: "การท่องเที่ยว",
      impact: "พัฒนาเส้นทางเดินป่า 3 เส้นทาง และจุดชมวิว 5 จุด",
    },
    {
      id: 7,
      title: "การแข่งขันกีฬาประจำตำบล",
      description:
        "การจัดการแข่งขันกีฬาประจำตำบล เพื่อส่งเสริมการออกกำลังกายและความสามัคคีในชุมชน",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "3-5 กุมภาพันธ์ 2023",
      category: "กีฬาและสุขภาพ",
      impact: "มีผู้เข้าร่วมกว่า 500 คน จาก 10 หมู่บ้านในตำบล",
    },
    {
      id: 8,
      title: "อบรมหัตถกรรมพื้นบ้าน",
      description:
        "การจัดอบรมหัตถกรรมพื้นบ้าน เพื่อถ่ายทอดภูมิปัญญาท้องถิ่นและส่งเสริมการสร้างรายได้เสริม",
      imageUrl: "https://images.unsplash.com/photo-1528817466703-7e26230dddb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "https://www.facebook.com/tourderwang",
      date: "15-16 กรกฎาคม 2023",
      category: "การศึกษา",
      impact: "ถ่ายทอดความรู้ให้ผู้เข้าร่วม 50 คน และสร้างกลุ่มหัตถกรรมในชุมชน",
    },
  ];

  const categories = [
    "all",
    "เทศกาล",
    "การท่องเที่ยว",
    "สิ่งแวดล้อม",
    "วัฒนธรรม",
    "เศรษฐกิจชุมชน",
    "กีฬาและสุขภาพ",
    "การศึกษา",
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SocialMediaBar />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <section className="py-16 bg-tour-orange text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              โครงการของเรา
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center">
              โครงการและกิจกรรมต่างๆ ที่ "ที่นี่วังสามหมอ" ได้จัดทำเพื่อส่งเสริมและพัฒนาชุมชน
            </p>
          </div>
        </section>

        {/* Projects Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    filter === category
                      ? "bg-tour-orange text-white"
                      : "bg-white hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category === "all" ? "ทั้งหมด" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  impact={project.impact}
                  date={project.date}
                  category={project.category}
                />
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">
                  ไม่พบโครงการในหมวดหมู่ที่เลือก
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
