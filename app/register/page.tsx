import Link from "next/link";
export default function RegisterPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      {/* Card */}
      <div className="w-full max-w-5xl bg-white/50 backdrop-blur-2xl rounded-2xl shadow-2xl p-8 md:p-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center font-sans text-black mb-10">
          Daftar Kelas Front End
        </h1>

        {/* Form Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            {/* Nama */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap anda"
                className="bg-white text-black rounded-lg px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-600"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black">Email</label>
              <input
                type="email"
                placeholder="Masukkan alamat email anda"
                className="bg-white text-black rounded-lg px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-600"
              />
            </div>

            {/* No HP */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black">No Handphone</label>
              <input
                type="text"
                placeholder="Masukkan no handphone anda"
                className="bg-white text-black rounded-lg px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-black">Pilih Paket</label>

              <select
                className="w-full bg-white text-black rounded-lg px-4 py-3 pr-10 shadow-md 
    focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
              >
                <option>Pilih paket anda</option>
                <option>Basic</option>
                <option>Premium</option>
              </select>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-10 flex flex-col gap-4">
          <Link href={"/pembayaran"}>
            <button className="w-full py-3 rounded-lg shadow-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-700 hover:opacity-90 transition transition-transform hover:scale-105">
              Lanjut
            </button>
          </Link>

          <Link href="/">
            <button
              className="w-full py-3 rounded-lg bg-white text-black font-medium shadow-lg border-2 border-purple-500 
  hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Kembali
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
