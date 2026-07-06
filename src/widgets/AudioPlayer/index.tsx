import { useEffect, useRef, useState } from "react";
import { Slider } from "antd";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoVolumeMediumOutline,
  IoVolumeMuteOutline,
  IoChevronUp,
  IoChevronDown,
} from "react-icons/io5";
import { MdForward10, MdReplay10, MdSpeed } from "react-icons/md";

const waveform = Array.from({ length: 90 }, () =>
  Math.round(20 + Math.random() * 80),
);

const allChapters = [
  { id: 1, title: "Kirish", time: "00:00", seconds: 0 },
  { id: 2, title: "Cho'ponning orzusi", time: "00:03", seconds: 3 },
  { id: 3, title: "Podshoning hikmati", time: "00:07", seconds: 7 },
  {
    id: 4,
    title: "Alkimyogar bilan uchrashuv",
    time: "00:11",
    seconds: 11,
  },
  { id: 5, title: "Piyoladagi javob", time: "00:17", seconds: 17 },
  { id: 6, title: "Cho'ldagi karvon", time: "00:25", seconds: 25 },
  { id: 7, title: "Yurak bilan suhbat", time: "00:50", seconds: 50 },
  { id: 8, title: "Vaha manzarasi", time: "00:55", seconds: 55 },
  {
    id: 9,
    title: "Ingliz olim bilan safar",
    time: "00:60",
    seconds: 60,
  },
  { id: 10, title: "Kimyo sirlari", time: "00:64", seconds: 64 },
];

const VISIBLE_COUNT = 5;
const SPEEDS = [1, 1.5, 2, 0.5];

function formatTime(seconds: number) {
  if (!seconds || Number.isNaN(seconds)) return "00:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

interface AudioPlayerProps {
  audioSrc: string;
}

export function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const waveformRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(0);
  const [showAllChapters, setShowAllChapters] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seekTo = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(time, 0), duration || 0);
    setCurrentTime(audio.currentTime);
  };

  const seekBy = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    seekTo(audio.currentTime + delta);
  };

  const goToPrevChapter = () => {
    const prev = [...allChapters]
      .reverse()
      .find((c) => c.seconds < currentTime - 1);
    seekTo(prev ? prev.seconds : 0);
  };

  const goToNextChapter = () => {
    const next = allChapters.find((c) => c.seconds > currentTime + 1);
    seekTo(next ? next.seconds : duration);
  };

  const handleSliderChange = (value: number) => {
    seekTo((value / 100) * duration);
  };

  const handleWaveformClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = waveformRef.current;
    if (!el || !duration) return;
    const rect = el.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    seekTo(ratio * duration);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const cycleSpeed = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const nextIndex = (speedIndex + 1) % SPEEDS.length;
    audio.playbackRate = SPEEDS[nextIndex];
    setSpeedIndex(nextIndex);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  const activeBarCount = Math.round((progressPercent / 100) * waveform.length);

  const visibleChapters = showAllChapters
    ? allChapters
    : allChapters.slice(0, VISIBLE_COUNT);

  return (
    <div className="flex-1 flex flex-col gap-5">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="">
        <h3 className="font-semibold mb-10">Audio tinglash</h3>

        <div
          ref={waveformRef}
          onClick={handleWaveformClick}
          className="flex items-center gap-0.75 h-16 cursor-pointer"
        >
          {waveform.map((height, index) => (
            <span
              key={index}
              className={`w-1 rounded-full transition-colors ${
                index < activeBarCount ? "bg-[#6243C3]" : "bg-gray-200"
              }`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <div className="mt-3">
          <Slider
            value={progressPercent}
            onChange={handleSliderChange}
            tooltip={{ open: false }}
            styles={{
              track: { background: "#6243C3" },
              handle: { borderColor: "#6243C3" },
            }}
          />
          <div className="flex justify-between text-xs text-gray-500 -mt-2">
            <span className="ml-1">{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={cycleSpeed}
            className="relative text-gray-500 hover:text-[#6243C3] transition-colors cursor-pointer"
          >
            <MdSpeed size={20} />
            <span className="absolute -top-2 -right-3 text-[10px] font-semibold text-[#6243C3]">
              {SPEEDS[speedIndex]}x
            </span>
          </button>
          <button
            onClick={goToPrevChapter}
            className="text-gray-500 hover:text-[#6243C3] transition-colors cursor-pointer"
          >
            <IoPlaySkipBackSharp size={20} />
          </button>
          <button
            onClick={() => seekBy(-10)}
            className="text-gray-500 hover:text-[#6243C3] transition-colors cursor-pointer"
          >
            <MdReplay10 size={22} />
          </button>
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-[#6243C3] text-white rounded-full hover:opacity-90 transition-opacity cursor-pointer"
          >
            {isPlaying ? (
              <IoMdPause className="text-xl" />
            ) : (
              <IoMdPlay className="text-xl ml-1" />
            )}
          </button>
          <button
            onClick={() => seekBy(10)}
            className="text-gray-500 hover:text-[#6243C3] transition-colors cursor-pointer"
          >
            <MdForward10 size={22} />
          </button>
          <button
            onClick={goToNextChapter}
            className="text-gray-500 hover:text-[#6243C3] transition-colors cursor-pointer"
          >
            <IoPlaySkipForwardSharp size={20} />
          </button>
          <button
            onClick={toggleMute}
            className="text-gray-500 hover:text-[#6243C3] transition-colors cursor-pointer"
          >
            {isMuted ? (
              <IoVolumeMuteOutline size={20} />
            ) : (
              <IoVolumeMediumOutline size={20} />
            )}
          </button>
        </div>
      </div>

      <div className="">
        <h3 className="font-semibold mb-4">Bo'limlar</h3>
        <ul className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-3">
          {visibleChapters.map((chapter, index) => {
            const nextChapter = allChapters[index + 1];
            const nextChapterSeconds = nextChapter
              ? nextChapter.seconds
              : Infinity;
            const isActive =
              currentTime >= chapter.seconds &&
              currentTime < nextChapterSeconds;

            return (
              <li
                key={chapter.id}
                onClick={() => seekTo(chapter.seconds)}
                className={`flex items-center justify-between text-sm cursor-pointer transition-colors border-gray-200 pb-2 ${
                  visibleChapters.length - 1 !== index ? "border-b" : ""
                } ${
                  isActive
                    ? "text-[#6243C3] font-semibold"
                    : "text-gray-700 hover:text-[#6243C3]"
                }`}
              >
                <span>
                  {chapter.id}. {chapter.title}
                </span>
                <span className={isActive ? "text-[#6243C3]" : "text-gray-500"}>
                  {chapter.time}
                </span>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setShowAllChapters((prev) => !prev)}
          className="flex items-center gap-1 text-[#6243C3] text-sm font-semibold mt-4 hover:underline cursor-pointer"
        >
          {showAllChapters ? (
            <>
              <span>Kamroq ko'rsatish</span>
              <IoChevronUp size={14} />
            </>
          ) : (
            <>
              <span>Barcha bo'limlarni ko'rish ({allChapters.length})</span>
              <IoChevronDown size={14} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
