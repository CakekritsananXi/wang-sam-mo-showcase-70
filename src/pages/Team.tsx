
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialMediaBar from "@/components/SocialMediaBar";
import TeamMember from "@/components/TeamMember";
import StatsCard from "@/components/StatsCard";

const Team = () => {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: "สมชาย ใจดี",
      role: "ผู้ก่อตั้งและผู้ดูแลเพจ",
      bio: "ผู้ริเริ่มก่อตั้งเพจ 'ที่นี่วังสามหมอ' ด้วยความต้องการนำเสนอเรื่องราวและวัฒนธรรมของชุมชนวังสามหมอสู่สายตาผู้คน",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        {
          platform: "facebook",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          ),
        },
        {
          platform: "instagram",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 2,
      name: "สุดา รักชุมชน",
      role: "ผู้จัดการเนื้อหา",
      bio: "ผู้รับผิดชอบในการวางแผนและสร้างสรรค์เนื้อหาให้กับเพจ มีความสนใจและความเชี่ยวชาญในด้านวัฒนธรรมและประวัติศาสตร์ท้องถิ่น",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        {
          platform: "facebook",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          ),
        },
        {
          platform: "instagram",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 3,
      name: "ประวิทย์ ถ่ายภาพ",
      role: "ช่างภาพ",
      bio: "ผู้บันทึกภาพกิจกรรมและเหตุการณ์ต่างๆ ของชุมชน มีประสบการณ์ด้านการถ่ายภาพมากกว่า 5 ปี และมีผลงานภาพถ่ายมากมาย",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        {
          platform: "facebook",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          ),
        },
        {
          platform: "instagram",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 4,
      name: "นิดา ชุมชนสัมพันธ์",
      role: "ผู้ประสานงานชุมชน",
      bio: "ทำหน้าที่ประสานงานระหว่างทีมงานและชุมชน รวมถึงหน่วยงานต่างๆ ในพื้นที่ เพื่อสนับสนุนการจัดกิจกรรมและโครงการต่างๆ",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      socialLinks: [
        {
          platform: "facebook",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          ),
        },
        {
          platform: "instagram",
          url: "#",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          ),
        },
      ],
    },
  ];

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
              ทีมงานของเรา
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center">
              รู้จักกับทีมงานที่ขับเคลื่อนเพจ "ที่นี่วังสามหมอ" และสร้างสรรค์เนื้อหาดีๆ เพื่อชุมชน
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageUrl={member.imageUrl}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ผลงานและความสำเร็จ
              </h2>
              <p className="text-lg text-gray-600">
                ตลอดระยะเวลาที่ผ่านมา เราได้สร้างผลงานและความสำเร็จมากมายให้กับชุมชนวังสามหมอ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">การเติบโต</h3>
                <p className="text-3xl font-bold text-tour-orange mb-2">10,000+</p>
                <p className="text-gray-600">ผู้ติดตามบนโซเชียลมีเดีย</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">เนื้อหา</h3>
                <p className="text-3xl font-bold text-tour-orange mb-2">500+</p>
                <p className="text-gray-600">โพสต์ที่เราได้สร้างสรรค์</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">กิจกรรม</h3>
                <p className="text-3xl font-bold text-tour-orange mb-2">50+</p>
                <p className="text-gray-600">กิจกรรมชุมชนที่เราได้จัดและสนับสนุน</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">การมีส่วนร่วม</h3>
                <p className="text-3xl font-bold text-tour-orange mb-2">100K+</p>
                <p className="text-gray-600">การมีส่วนร่วมกับเนื้อหาของเรา</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                เส้นทางของเรา
              </h2>
              <p className="text-lg text-gray-600">
                เรื่องราวความเป็นมาและการเติบโตของ "ที่นี่วังสามหมอ" ตั้งแต่ก่อตั้งจนถึงปัจจุบัน
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto px-4">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tour-orange/30"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-tour-orange"></div>
                  <div className="ml-auto w-full md:w-5/12 pl-6 text-right md:pr-16">
                    <h3 className="text-xl font-bold mb-2 text-tour-orange">2018</h3>
                    <h4 className="text-lg font-medium mb-2">การก่อตั้ง</h4>
                    <p className="text-gray-600">
                      ก่อตั้งเพจ "ที่นี่วังสามหมอ" เพื่อนำเสนอเรื่องราวและวิถีชีวิตของชุมชน
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-tour-orange"></div>
                  <div className="mr-auto w-full md:w-5/12 pr-6 md:pl-16">
                    <h3 className="text-xl font-bold mb-2 text-tour-orange">2020</h3>
                    <h4 className="text-lg font-medium mb-2">การเติบโต</h4>
                    <p className="text-gray-600">
                      มีผู้ติดตามเพิ่มขึ้นถึง 5,000 คน และเริ่มจัดกิจกรรมเพื่อชุมชนมากขึ้น
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-tour-orange"></div>
                  <div className="ml-auto w-full md:w-5/12 pl-6 text-right md:pr-16">
                    <h3 className="text-xl font-bold mb-2 text-tour-orange">2022</h3>
                    <h4 className="text-lg font-medium mb-2">การขยายตัว</h4>
                    <p className="text-gray-600">
                      ขยายทีมงานและเริ่มโครงการใหม่ๆ เพื่อพัฒนาชุมชนวังสามหมอ เช่น เทศกาลอาหาร และตลาดน้ำ
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-tour-orange"></div>
                  <div className="mr-auto w-full md:w-5/12 pr-6 md:pl-16">
                    <h3 className="text-xl font-bold mb-2 text-tour-orange">2024</h3>
                    <h4 className="text-lg font-medium mb-2">ปัจจุบัน</h4>
                    <p className="text-gray-600">
                      มีผู้ติดตามมากกว่า 10,000 คน และกลายเป็นศูนย์กลางข้อมูลและกิจกรรมของชุมชนวังสามหมอ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
