import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center min-h-90 px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold text-orange-400 mb-4">Project</h1>
      <p className="text-lg text-white/50 mb-10">
        ini adalah beberapa project yang ku buat
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="group relative rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/10 hover:border-orange-400 hover:shadow-orange-500/40 transition duration-300 flex flex-col">
          <div className="relative w-full h-48">
            <Image
              src="/images/project01.png"
              alt="Project 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 p-4 text-center">
            <p className="mb-4">
              ini adalah project aku saat aku gabut, media editing yang ku
              gunakan CapCut
            </p>
            <a
              href="https://vt.tiktok.com/ZSAbWesQm/"
              className="mt-auto px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-black font-semibold transition inline-block"
            >
              View
            </a>
          </div>
        </div>

        <div className="group relative rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/10 hover:border-orange-400 hover:shadow-orange-500/40 transition duration-300 flex flex-col">
          <div className="relative w-full h-48">
            <Image
              src="/images/project02.png"
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 p-4 text-center">
            <p className="mb-4">
              ini adalah project aku saat kelas 10 tepatnya saat aku ujian yang
              dimana aku menggunakan media Flutter
            </p>
            <Link
              href="/"
              className="mt-auto px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-black font-semibold transition inline-block"
            >
              View
            </Link>
          </div>
        </div>

        <div className="group relative rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/10 hover:border-orange-400 hover:shadow-orange-500/40 transition duration-300 flex flex-col">
          <div className="relative w-full h-48">
            <Image
              src="/images/project03.png"
              alt="Project 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1 p-4 text-center">
            <p className="mb-4">
              ini adalah project aku saat aku gabut sama seperti tadi, media
              editing yang ku gunakan Alight Motion
            </p>
            <a
              href="https://vt.tiktok.com/ZSAbnVkPf/"
              className="mt-auto px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-black font-semibold transition inline-block"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
