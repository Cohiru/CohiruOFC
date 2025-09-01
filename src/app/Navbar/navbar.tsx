import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-transparent text-white px-5 py-5 w-full z-50">
      <div className="container mx-auto bg-white/5 backdrop-blur-md rounded-xl px-6 py-3 grid grid-cols-3 items-center">
        <h1 className="text-lg font-bold text-orange-400">COHIRU.</h1>

        <ul className="flex justify-center gap-6 font-bold">
          <li>
            <Link href="/" className="hover:text-orange-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Tentang" className="hover:text-orange-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/Skill" className="hover:text-orange-300 transition">
              Skill
            </Link>
          </li>
          <li>
            <Link href="/Project" className="hover:text-orange-300 transition">
              Project
            </Link>
          </li>
        </ul>

        <div className="flex justify-end gap-3">
          <Link
            href="https://www.instagram.com/chokyas_?igsh=MXc5bWdjeHpubnhyaw=="
            target="_blank"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={22}
              height={22}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@s.cohiru?_t=ZS-8zMGiTABDoF&_r=1"
            target="_blank"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={22}
              height={22}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
          <Link
            href="/Pengaturan"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Image
              src="/icons/setting.svg"
              alt="Setting"
              width={22}
              height={22}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
          <Link
            href="/Kontak"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Image
              src="/icons/kontak.svg"
              alt="Kontak"
              width={22}
              height={22}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
