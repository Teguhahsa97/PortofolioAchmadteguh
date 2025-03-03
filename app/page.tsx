import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import SplitText from "./components/SplitText/SplitText";
import Aurora from "./components/Aurora/Aurora";
import GradientText from "./components/GradientText/GradientText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1B232E] flex flex-col items-center relative">
      {/* Background Aurora */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Aurora
          colorStops={["#E735E4", "#35E79D", "#aaff00"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Kiri - Teks */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
            {/* Rotating Text */}
            <div className="flex items-center gap-3 ml-3 z-10">
              <h1 className="text-2xl font-bold text-white">I'm Ready to</h1>
              <RotatingText
                texts={['Create', 'Innovate', 'Build', 'Engineer', 'Design']}
                mainClassName="px-3 bg-[#AAFF00] text-black py-1 rounded-lg text-xl font-bold inline-flex transition-all"
                staggerFrom="last"
                initial={{ y: "0%" }}  
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            {/* Nama & Profesi */}
            <div className="text-left flex flex-col items-start">
              <SplitText
                text="I'm ACHMAD TEGUH"
                className="text-6xl font-semibold text-start ml-3"
                delay={75}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
              <SplitText
                text="Engineering the Future"
                className="text-3xl font-semibold text-[#AAFF00] text-start ml-3"
                delay={125}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>

            {/* Deskripsi */}
            <BlurText
              text="I am from Indonesia, currently a Mechanical Engineering Education student at Universitas Negeri Malang. I am skilled in using Mastercam and Autodesk Inventor for technical drawings. Recently, I have been focusing on learning coding to expand my skill set. Let’s create something great together!"
              delay={70}
              animateBy="words"
              direction="top"
              className="text-xl text-gray-300 mb-0 ml-3"
            />

            {/* Tombol Contact Me */}
            <div className="flex items-center ml-3">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="px-8 py-2 rounded-lg border"
              >
                Contact Me
              </GradientText>
            </div>
          </div>

          {/* Kanan - Lanyard */}
          <div className="col-span-12 md:col-span-5 flex justify-center relative">
            <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>

      {/* Tambahkan ScrollVelocity sebagai pembatas */}
      <ScrollVelocity 
        texts={['Keep Scrolling', 'There\'s More Below']} 
        className="custom-scroll-text"
      />

      {/* Tambahkan div kosong di bawah konten */}
      <div className="h-96"></div>
      <div className="h-screen"></div>
    </div>
  );
}
