
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialMediaBar from "@/components/SocialMediaBar";
import GalleryGrid from "@/components/GalleryGrid";

const Gallery = () => {
  // Sample gallery data
  const galleryImages = [
    {
      id: "1",
      imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "เทศกาลอาหารพื้นบ้าน",
      date: "15 มีนาคม 2023",
      category: "เทศกาล",
    },
    {
      id: "2",
      imageUrl: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "ตลาดน้ำวังสามหมอ",
      date: "10 มกราคม 2023",
      category: "การท่องเที่ยว",
    },
    {
      id: "3",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "กิจกรรมปลูกป่าชุมชน",
      date: "5 มิถุนายน 2023",
      category: "สิ่งแวดล้อม",
    },
    {
      id: "4",
      imageUrl: "https://images.unsplash.com/photo-1549213438-a0456cc89c85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "ประเพณีบุญบั้งไฟ",
      date: "2 พฤษภาคม 2023",
      category: "วัฒนธรรม",
    },
    {
      id: "5",
      imageUrl: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "ตลาดนัดชุมชน",
      date: "26 มิถุนายน 2023",
      category: "เศรษฐกิจชุมชน",
    },
    {
      id: "6",
      imageUrl: "https://images.unsplash.com/photo-1544551763-92ab472cad5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "เส้นทางท่องเที่ยวเชิงนิเวศ",
      date: "18 เมษายน 2023",
      category: "การท่องเที่ยว",
    },
    {
      id: "7",
      imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "การแข่งขันกีฬาประจำตำบล",
      date: "5 กุมภาพันธ์ 2023",
      category: "กีฬาและสุขภาพ",
    },
    {
      id: "8",
      imageUrl: "https://images.unsplash.com/photo-1528817466703-7e26230dddb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "อบรมหัตถกรรมพื้นบ้าน",
      date: "16 กรกฎาคม 2023",
      category: "การศึกษา",
    },
    {
      id: "9",
      imageUrl: "https://images.unsplash.com/photo-1524222717473-730000096953?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "การประชุมพัฒนาชุมชน",
      date: "10 สิงหาคม 2023",
      category: "การพัฒนาชุมชน",
    },
    {
      id: "10",
      imageUrl: "https://images.unsplash.com/photo-1607490040458-3ebf142de8a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "คอนเสิร์ตการกุศล",
      date: "22 กันยายน 2023",
      category: "กิจกรรมพิเศษ",
    },
    {
      id: "11",
      imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "เทศกาลลอยกระทง",
      date: "28 พฤศจิกายน 2023",
      category: "วัฒนธรรม",
    },
    {
      id: "12",
      imageUrl: "https://images.unsplash.com/photo-1504591504549-8ce1589ea6f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "พิธีไหว้ครู",
      date: "14 มิถุนายน 2023",
      category: "การศึกษา",
    },
    {
      id: "13",
      imageUrl: "https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "ตลาดน้ำยามค่ำ",
      date: "20 ธันวาคม 2023",
      category: "การท่องเที่ยว",
    },
    {
      id: "14",
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "เทศกาลอาหารท้องถิ่น",
      date: "5 ตุลาคม 2023",
      category: "เทศกาล",
    },
    {
      id: "15",
      imageUrl: "https://images.unsplash.com/photo-1490133286698-5d191fbc387c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "กิจกรรมทำความสะอาดชุมชน",
      date: "15 มกราคม 2024",
      category: "สิ่งแวดล้อม",
    },
    {
      id: "16",
      imageUrl: "https://images.unsplash.com/photo-1603065881771-8de24a1b935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "ตลาดนัดธรรมชาติ",
      date: "2 กุมภาพันธ์ 2024",
      category: "เศรษฐกิจชุมชน",
    },
  ];

  const categories = [
    "เทศกาล",
    "การท่องเที่ยว",
    "สิ่งแวดล้อม",
    "วัฒนธรรม",
    "เศรษฐกิจชุมชน",
    "กีฬาและสุขภาพ",
    "การศึกษา",
    "การพัฒนาชุมชน",
    "กิจกรรมพิเศษ",
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
              แกลเลอรี่ภาพ
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center">
              ภาพกิจกรรมและความประทับใจจากโครงการต่างๆ ของ "ที่นี่วังสามหมอ"
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <GalleryGrid images={galleryImages} categories={categories} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
