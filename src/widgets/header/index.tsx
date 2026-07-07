import { useState } from "react";
import { Link } from "react-router-dom";
import { ImEnter } from "react-icons/im";
import { SiAudiobookshelf } from "react-icons/si";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const links = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/books", label: "Kitoblar" },
  { to: "/categories", label: "Kategoriyalar" },
  { to: "/authors", label: "Mualliflar" },
  { to: "/help", label: "Yordam" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container flex items-center gap-10 p-4 font-medium max-[450px]:shadow-md max-[450px]:fixed top-0 left-0 bg-white z-50">
      <Link to="/" className="flex items-center gap-2 text-lg font-bold">
        <div className="bg-[#6243C3] p-2 rounded-lg text-white">
          <SiAudiobookshelf />
        </div>
        <span className="">AudioKutubxona</span>
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="hidden max-[450px]:block text-4xl ml-auto text-[#6243C3]"
      >
        {isOpen ? <IoMdClose /> : <CgMenu />}
      </div>
      <div
        className={`w-full flex items-center gap-10 mobile-menu ${isOpen ? "max-[450px]:translate-x-0" : "max-[450px]:-translate-x-full"}`}
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group relative hover:text-[#6243C3] transition-colors duration-300 mt-0.5"
          >
            <div className="w-0 h-0.5 absolute bottom-0 left-0 bg-[#6243C3] group-hover:w-full duration-300 rounded-full"></div>
            {link.label}
          </Link>
        ))}
        <Link
          to="/login"
          className="enter-btn group flex items-center gap-2 ml-auto bg-[#6243C3] text-white px-5 py-2 rounded-lg border border-[#6243C3] hover:bg-white hover:border-[#6243C3] transition-colors duration-300"
        >
          <span className="max-[450px]:text-lg text-sm group-hover:text-[#5538A0] transition-colors duration-300">
            Kirish
          </span>
          <ImEnter className="group-hover:text-[#5538A0] transition-colors duration-300" />
        </Link>
      </div>
    </div>
  );
}
