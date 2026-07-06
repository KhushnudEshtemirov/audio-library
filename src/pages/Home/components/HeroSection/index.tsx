import heroImage from "@/assets/images/2.png";
import { CiSearch } from "react-icons/ci";

export function HeroSection() {
  return (
    <div className="bg-[#a57eda0e]">
      <div className="container flex p-5">
        <div className="flex-1 flex flex-col items-start gap-8 py-20">
          <h1 className="text-4xl font-bold leading-12">
            Sevgan kitoblaringizni <br /> tinglang
          </h1>
          <p className="text-gray-600 font-medium">
            Eng yaxshi audiokitoblar to'plami.
            <br />
            Istalgan joyda, istalgan vaqtda.
          </p>
          <div className="relative w-4/5">
            <input
              type="text"
              placeholder="Audiokitob qidirish..."
              className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#6243C3] focus:border-[#6243C3]"
            />
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={heroImage} alt="Audiobooks" className="w-4/5 h-auto" />
        </div>
      </div>
    </div>
  );
}
