
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialMediaBar from "@/components/SocialMediaBar";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
              ติดต่อเรา
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center">
              มีคำถาม ข้อเสนอแนะ หรือต้องการร่วมงานกับเรา? ติดต่อเราได้ที่นี่
            </p>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  ข้อมูลการติดต่อ
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-tour-orange/10 p-3 rounded-lg text-tour-orange mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">โทรศัพท์</h3>
                      <p className="text-gray-600">0XX-XXX-XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-tour-orange/10 p-3 rounded-lg text-tour-orange mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">อีเมล</h3>
                      <p className="text-gray-600">tourderwang@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-tour-orange/10 p-3 rounded-lg text-tour-orange mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">สถานที่</h3>
                      <p className="text-gray-600">
                        อำเภอวังสามหมอ จังหวัดอุดรธานี 41280
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-tour-orange/10 p-3 rounded-lg text-tour-orange mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">โซเชียลมีเดีย</h3>
                      <div className="flex space-x-4 mt-2">
                        <a
                          href="https://www.facebook.com/tourderwang"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-tour-orange hover:text-tour-orange-dark transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-tour-orange hover:text-tour-orange-dark transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-tour-orange hover:text-tour-orange-dark transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">ช่วงเวลาทำการ</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">วันจันทร์ - วันศุกร์</p>
                      <p className="text-gray-600">9:00 - 17:00 น.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">วันเสาร์</p>
                      <p className="text-gray-600">10:00 - 15:00 น.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">ติดตามเราที่เฟซบุ๊ก</h3>
                  <p className="mb-4">
                    ติดตามข่าวสารและกิจกรรมล่าสุดของเราได้ที่เฟซบุ๊กเพจ
                  </p>
                  <a
                    href="https://www.facebook.com/tourderwang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tour-orange hover:text-tour-orange-dark transition-colors"
                  >
                    <span className="mr-2">facebook.com/tourderwang</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  ส่งข้อความถึงเรา
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                แผนที่และตำแหน่งที่ตั้ง
              </h2>
              <p className="text-lg text-gray-600">
                พบกับเราได้ที่อำเภอวังสามหมอ จังหวัดอุดรธานี
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121444.54511450613!2d103.36758814037837!3d16.86520740275963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312315b38e2e4d25%3A0x30469f0b6477b30!2z4Lin4Lix4LiH4Liq4Liy4Lih4Lir4Lih4Lit!5e0!3m2!1sth!2sth!4v1715655509669!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - วังสามหมอ อุดรธานี"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
