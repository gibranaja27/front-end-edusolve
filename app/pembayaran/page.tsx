import Link from "next/link";
export default function RegisterPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      {/* Card */}
      <div className="w-full max-w-5xl bg-white/50 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 md:p-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center font-sans text-black mb-10">
          Ringkasan Pembayaran
        </h1>
        <div className="px-10 py-10 rounded-2xl border-2 border-purple-500 items-center justify-center">
          <div className="flex flex-row gap-40 items-center justify-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-purple-500 font-sans text-2xl">
                Detail Pembayaran :
              </h1>
              <p className="text-black font-sans bg-white/30 backdrop:blur-2xl shadow-xl px-4 py-2 rounded-lg w-fit">
                Produk :Front End Starter Class
              </p>
              <p className="text-black font-sans bg-white/30 backdrop:blur-2xl shadow-xl px-4 py-2 rounded-lg w-fit">
                Paket :Premium
              </p>
              <p className="text-black font-sans bg-white/30 backdrop:blur-2xl shadow-xl px-4 py-2 rounded-lg w-fit">
                Harga :Rp 299.000
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-purple-500 font-sans text-2xl">Benefit :</h1>
              <div className="flex flex-row items-center gap-3 bg-white/30 backdrop:blur-2xl px-4 py-2 rounded-lg w-fit">
                {/* Icon */}
                <div className="flex items-center  text-black justify-center w-6 h-6 border-2 border-black rounded-md">
                  ✓
                </div>

                {/* Text */}
                <span className="text-black font-medium">
                  Akses kelas selamanya
                </span>
              </div>
              <div className="flex flex-row items-center gap-3 bg-white/30 backdrop:blur-2xl shadow-xl px-4 py-2 rounded-lg w-fit">
                {/* Icon */}
                <div className="flex items-center text-black justify-center w-6 h-6 border-2 border-black rounded-md">
                  ✓
                </div>

                {/* Text */}
                <span className="text-black font-medium">Sertifikat</span>
              </div>
              <div className="flex flex-row items-center gap-3 bg-white/30 backdrop:blur-2xl shadow-xl px-4 py-2 rounded-lg w-fit">
                {/* Icon */}
                <div className="flex items-center justify-center text-black w-6 h-6 border-2 border-black rounded-md">
                  ✓
                </div>

                {/* Text */}
                <span className="text-black font-medium">Materi projek</span>
              </div>
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
        <div className="px-10 py-10 my-5 rounded-2xl border-2 border-purple-500 items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-purple-500 font-sans text-2xl py-5">Metode Pembayaran :</h1>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <select
                  className="w-full bg-white/30 backdrop:blur-2xl text-black rounded-lg px-4 py-3 pr-10 shadow-md 
    focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                >
                  <option>Pilih paket anda</option>
                  <option>Basic</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Button Section */}
        <div className="mt-10 flex flex-col gap-4">
          <button className="w-full py-3 rounded-lg shadow-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-700 hover:opacity-90 transition transition-transform hover:scale-105">
            Bayar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
