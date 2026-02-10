import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-purple-300">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-16 md:my-32 px-6">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="undraw_online-learning_tgmv-removebg-preview.png"
            alt="Hero Image"
            className="w-64 md:w-auto"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <h1
            className="
  text-3xl md:text-5xl 
  max-w-xl md:max-w-3xl 
  leading-snug md:leading-normal 
  font-bold font-sans 
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  bg-[length:200%_auto] 
  bg-clip-text text-transparent 
  animate-gradient
  "
          >
            Mulai Karier Dengan Front End Developer Dari dua
          </h1>

          <p className="text-lg md:text-2xl max-w-xl md:max-w-3xl text-black my-3 md:my-5 font-sans">
            Pelajari HTML, CSS, Tailwind, dan JavaScript melalui kelas online
            yang terstruktur dan mudah dipahami.
          </p>

          {/* Button */}
          <div className="flex md:flex">
            <Link
              href="/register"
              className="bg-purple-700 text-white px-8 md:px-9 py-3 md:py-2 rounded-md text-lg md:text-xl shadow-lg hover:bg-purple-600 font-sans"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
