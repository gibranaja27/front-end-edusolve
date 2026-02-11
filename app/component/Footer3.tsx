import Link from "next/link";

export default function Footer3() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-500 py-16">
      <div className="flex flex-col">

        {/* Logo & Tagline */}
        <div className="flex flex-col gap-5 items-center">
          <img
            src="logo_edusolve-removebg-preview.png"
            alt="logo-edusolve"
            className="h-32 w-40"
          />
          <h1 className="text-black text-base font-sans font-semibold text-center md:text-xl max-w-xl my-5 px-4">
            Rintis Karir Impian bersama Edu Friendly
          </h1>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-80 items-center justify-center my-16 md:my-40">

          {/* Contact */}
          <div className="flex flex-col gap-6 md:gap-10 items-center">
            <h1 className="text-xl md:text-2xl text-purple-800 font-semibold text-center font-sans">
              Contact
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href={"/#"}>
                <img
                  src="communication (1).png"
                  alt="email"
                  className="w-10 h-10 transition-transform hover:scale-125"
                />
              </Link>
              <Link href={"/#"}>
                <img
                  src="whatsapp.png"
                  alt="whatsapp"
                  className="w-10 h-10 transition-transform hover:scale-125"
                />
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-6 md:gap-10 items-center">
            <h1 className="text-xl md:text-2xl text-purple-800 font-semibold text-center font-sans">
              Social Media
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href={"/#"}>
                <img
                  src="instagram.png"
                  alt="ig"
                  className="w-10 h-10 transition-transform hover:scale-125"
                />
              </Link>
              <Link href={"/#"}>
                <img
                  src="tik-tok.png"
                  alt="tiktok"
                  className="w-10 h-10 transition-transform hover:scale-125"
                />
              </Link>
              <Link href={"/#"}>
                <img
                  src="linkedin.png"
                  alt="linkedin"
                  className="w-10 h-10 transition-transform hover:scale-125"
                />
              </Link>
              <Link href={"/#"}>
                <img
                  src="twitter.png"
                  alt="twitter"
                  className="w-10 h-10 transition-transform hover:scale-125"
                />
              </Link>
              <Link href={"/#"}>
                <img
                  src="youtube.png"
                  alt="youtube"
                  className="w-10 h-10 transition-transform hover:scale-125"
                />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
