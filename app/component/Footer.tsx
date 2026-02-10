export default function Footer() {
  return (
    <section className="pt-20 md:pt-32 pb-20 md:pb-24 bg-white px-6">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-sans font-semibold text-black">
          Fitur Keunggulan
        </h1>
        <p className="text-lg md:text-2xl text-black font-sans max-w-2xl">
          Benefit yang anda dapatkan jika anda mengikuti program kelas online
          ini
        </p>
      </div>

      {/* Features Wrapper */}
      <div className="flex flex-col gap-24 md:gap-40 mt-20 md:mt-40">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-80">
          <img
            src="hierarchical-structure.png"
            alt=""
            className="w-52 md:w-80"
          />

          <div className="flex flex-col gap-4 items-center text-center">
            <img src="number-one.png" alt="" className="w-20 md:w-36" />
            <h1 className="text-2xl md:text-4xl text-purple-700 font-semibold">
              Materi Terstruktur
            </h1>
            <p className="text-black text-base md:text-2xl max-w-md">
              Belajar dari dasar hingga membuat project landing page.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-80">
          <img src="mentoring.png" alt="" className="w-52 md:w-80" />

          <div className="flex flex-col gap-4 items-center text-center">
            <img src="number-2.png" alt="" className="w-20 md:w-36" />
            <h1 className="text-2xl md:text-4xl text-purple-700 font-semibold">
              Mentor Berpengalaman
            </h1>
            <p className="text-black text-base md:text-2xl max-w-md">
              Dibimbing oleh praktisi Front End Developer yang berpengalaman dan
              profesional
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-80">
          <img src="certificate.png" alt="" className="w-52 md:w-80" />

          <div className="flex flex-col gap-4 items-center text-center">
            <img src="number-3.png" alt="" className="w-20 md:w-36" />
            <h1 className="text-2xl md:text-4xl text-purple-700 font-semibold">
              Sertifikat & Portfolio
            </h1>
            <p className="text-black text-base md:text-2xl max-w-md">
              Dapatkan sertifikat dan project untuk portfolio dalam memenuhi
              jenjang karier kedepan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
