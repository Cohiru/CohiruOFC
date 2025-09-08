import Image from "next/image";

export default function Skill() {
  const skills = [
    { src: "/icons/html.svg", alt: "HTML" },
    { src: "/icons/css.svg", alt: "CSS" },
    { src: "/icons/javascript.svg", alt: "JavaScript" },
    { src: "/icons/dart.svg", alt: "Dart" },
    { src: "/icons/flutter.svg", alt: "Flutter" },
    { src: "/icons/react.svg", alt: "React" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-118 px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-orange-400 mb-4">Skill</h1>
      <p className="text-lg text-white/80 mb-10 max-w-2xl">
        Aku menguasai beberapa skill seperti{" "}
        <span className="text-orange-300 font-semibold">
          Html, Css, Javascript, Dart, Flutter, dan React
        </span>.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-md hover:shadow-orange-400/50 hover:bg-white/20 transition duration-300 flex items-center justify-center"
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
