import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SiAudiobookshelf } from "react-icons/si";

export function Footer() {
  return (
    <footer className="mt-auto text-white">
      <div className="bg-[#0d0f31] py-8 text-white">
        <div className="container flex justify-between items-start gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-bold">
              <div className="bg-[#6243C3] p-2 rounded-lg text-white">
                <SiAudiobookshelf />
              </div>
              <span>AudioKutubxona</span>
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              <span className="font-bold">AudioKutubxona</span> - bu sizning
              audio kitoblar kutubxonangiz. <br /> Biz sizga eng so'nggi va eng
              mashhur audio kitoblarni taqdim etamiz.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="w-8 h-8 bg-[#6243C3] p-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-[#4b2fa6] transition-colors duration-300">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 bg-[#6243C3] p-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-[#4b2fa6] transition-colors duration-300">
                <FaInstagram />
              </div>
              <div className="w-8 h-8 bg-[#6243C3] p-2 rounded-lg text-white mt-4 cursor-pointer hover:bg-[#4b2fa6] transition-colors duration-300">
                <FaTelegramPlane />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Kategoriyalar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/categories:fiction"
                  className="text-gray-400 hover:text-white"
                >
                  Badiiy adabiyot
                </Link>
              </li>
              <li>
                <Link
                  to="/categories:scientific"
                  className="text-gray-400 hover:text-white"
                >
                  Ilmiy adabiyot
                </Link>
              </li>
              <li>
                <Link
                  to="/categories:history"
                  className="text-gray-400 hover:text-white"
                >
                  Tarixiy
                </Link>
              </li>
              <li>
                <Link
                  to="/categories:children"
                  className="text-gray-400 hover:text-white"
                >
                  Bolalar uchun
                </Link>
              </li>
              <li>
                <Link
                  to="/categories:business"
                  className="text-gray-400 hover:text-white"
                >
                  Biznes va moliya
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Foydali havolalar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white">
                  Yordam
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Foydanaluvchi shartlari
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Maxfilylik siyosati
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Aloqa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@audiokutubxona.uz"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <GoMail /> <span>info@audiokutubxona.uz</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+998712345678"
                  className="flex items-center gap-2 text-gray-400 hover:text-white"
                >
                  <FiPhoneCall /> <span>+998 71 234-56-78</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#0d0f31e1] py-4">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AudioKutubxona. Barcha huquqlar
            himoyalangan.
          </p>
          <p className="text-sm text-gray-500">
            Designed by <span className="font-semibold">Eshtemirov Bunyod</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
