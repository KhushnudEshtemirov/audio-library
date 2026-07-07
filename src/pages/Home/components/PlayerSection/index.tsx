import { Rate } from "antd";
import { FaRegBookmark } from "react-icons/fa";

import book from "@/assets/images/1.jpg";
import { AudioPlayer } from "@/widgets";
import audio from "@/assets/audios/1.mp3";

export function PlayerSection() {
  return (
    <div className="container flex gap-10 items-center justify-center py-10 max-[450px]:flex-col">
      <div className="flex-1 flex items-start gap-10 max-[450px]:flex-col">
        <img
          src={book}
          alt="Book"
          className="w-56 rounded-lg max-[450px]:w-full"
        />
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl font-bold">Alkimyogar</h2>
          <p className="text-sm font-semibold text-gray-500">Paulo Koelo</p>
          <div className="flex gap-2 mt-3">
            <Rate allowHalf defaultValue={4.5} />
            <p className="flex items-center gap-2 ml-2">
              <span className="font-bold">4.5</span>
              <span className="text-xs text-gray-500">(200 ta baho)</span>
            </p>
          </div>
          <div className="flex gap-20 mt-4">
            <div className="flex flex-col gap-1 border-l-8 border-gray-200 pl-4">
              <p className="text-sm text-gray-500">Doimiyligi</p>
              <span className="font-semibold text-gray-600 text-sm">
                04:12:00
              </span>
            </div>
            <div className="flex flex-col gap-1 border-l-8 border-gray-200 pl-4">
              <p className="text-sm text-gray-500">Bo'limlar</p>
              <span className="font-semibold text-gray-600 text-sm">20 ta</span>
            </div>
          </div>
          <div className="text-sm text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <button className="flex items-center gap-2 bg-white border border-[#6243C3] text-sm text-[#6243C3] font-semibold py-2 px-4 mt-4 rounded-md hover:bg-[#6243C3] cursor-pointer hover:border-[#6243C3] hover:text-white transition-all duration-300">
            <FaRegBookmark />
            <span>Saqlab qo'yish</span>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 bg-[#a57eda0e] px-8 py-6 rounded-lg shadow-[0_0_14px_rgba(0,0,0,0.1)] max-[450px]:w-full">
        <AudioPlayer audioSrc={audio} />
      </div>
    </div>
  );
}
