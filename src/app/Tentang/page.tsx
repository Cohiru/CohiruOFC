import Image from "next/image";

export default function Tentang() {
  return (
    <div className="flex flex-row items-center justify-center min-h-130 gap-8">
      <div className="w-90 h-90 rounded-full overflow-hidden shadow-lg relative">
        <Image
          src="/images/cohiru.jpg"
          alt="Choky"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-4xl font-bold text-orange-400 mb-4">
          Whatssup, I'm Choky!
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          aku adalah seorang programmer pemula,
          meskipun mengoding diawal sangatlah sulit untuk di pahami, namun aku akan
          belajar segiat mungkin agar dimasa depan aku menjadi programmer yang jago.
          Ohya aku mempunyai hobi mengedit karena saat aku masih kecil aku suka sekali
          melihat editan editan keren. Aku memiliki warna favorit yaitu kuning, hitam, 
          biru. Lagu Favoritku Wild Flower artistnya Billie Eilish.  
          Aku adalah siswa SMKN 8 Malang, aku masuk di jurusan RPL, alasanku masuk di 
          RPL yaitu aku memiliki ketertarikan untuk membuat aplikasi ataupun web.  
          Doakan Aku bisa menguasai dunia perkodingan dan aku akan berusaha semaksimal mungkin.
        </p>
      </div>
    </div>
  );
}
