"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default function Footer2() {
  return (
    <section className="bg-purple-200 py-16">
      {/* Header */}
      <div className="flex flex-col gap-6 items-center justify-center mx-5 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-black">
          Testimoni
        </h1>
        <p className="text-lg md:text-2xl text-black max-w-2xl">
          Beberapa tanggapan yang didapatkan setelah mengikuti program kelas
          online ini
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto px-6 mt-14">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* CARD 1 */}
          <SwiperSlide>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition duration-300">
              <img
                src="Foto Formal_Wisuda_Gibran.jpg"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h1 className="text-lg font-semibold text-black">
                Gibran Raja Aulia Putranami
              </h1>
              <p className="text-sm text-gray-600">
                “Materinya mudah dipahami dan cocok untuk pemula”
              </p>
              <div className="flex gap-2 mt-2">
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 2 */}
          <SwiperSlide>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition duration-300">
              <img
                src="Screenshot 2024-07-15 205912.png"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h1 className="text-lg font-semibold text-black">
                Alif Firmansyah
              </h1>
              <p className="text-sm text-gray-600">
                “Setelah ikut kelas ini, saya lebih percaya diri melamar kerja”
              </p>
              <div className="flex gap-2 mt-2">
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 3 */}
          <SwiperSlide>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition duration-300">
              <img
                src="Screenshot 2024-07-15 191827.png"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h1 className="text-lg font-semibold text-black">
                Muhammad Rayhan
              </h1>
              <p className="text-sm text-gray-600">
                “Setelah saya mengikuti program kelas online ini saya
                mendapatkan benefit”
              </p>
              <div className="flex gap-2 mt-2">
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
              </div>
            </div>
          </SwiperSlide>

          {/* DUPLIKASI CARD UNTUK JADI 8 */}
          <SwiperSlide>
            {/* Copy CARD 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition duration-300">
              <img
                src="Foto Formal_Wisuda_Gibran.jpg"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h1 className="text-lg font-semibold text-black">
                Gibran Raja Aulia Putranami
              </h1>
              <p className="text-sm text-gray-600">
                “Materinya mudah dipahami dan cocok untuk pemula”
              </p>
              <div className="flex gap-2 mt-2">
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
                <img src="star.png" className="w-5 h-5" />
              </div>
            </div>
          </SwiperSlide>

          {/* Tambah lagi sampai total 8 slide */}
          {/* Ulangi CARD 2 dan 3 sesuai kebutuhan */}
        </Swiper>
      </div>
    </section>
  );
}
