import { Link } from "react-router-dom";
import { ImEnter } from "react-icons/im";
import { SiAudiobookshelf } from "react-icons/si";

const links = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/books", label: "Kitoblar" },
  { to: "/categories", label: "Kategoriyalar" },
  { to: "/authors", label: "Mualliflar" },
  { to: "/help", label: "Yordam" },
];

export function Header() {
  return (
    <div className="container flex items-center gap-10 p-4 font-medium">
      <Link to="/" className="flex items-center gap-2 text-lg font-bold">
        <div className="bg-[#6243C3] p-2 rounded-lg text-white">
          <SiAudiobookshelf />
        </div>
        <span>AudioKutubxona</span>
      </Link>
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
        className="group flex items-center gap-2 ml-auto bg-[#6243C3] text-white px-5 py-2 rounded-lg border border-[#6243C3] hover:bg-white hover:border-[#6243C3] transition-colors duration-300"
      >
        <span className="text-sm group-hover:text-[#5538A0] transition-colors duration-300">
          Kirish
        </span>
        <ImEnter className="group-hover:text-[#5538A0] transition-colors duration-300" />
      </Link>
    </div>
  );
}
