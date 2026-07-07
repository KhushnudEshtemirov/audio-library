import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import { BookCard } from "@/widgets";
import book1 from "@/assets/images/1.jpg";
import book2 from "@/assets/images/2.jpg";
import book3 from "@/assets/images/3.jpg";
import book4 from "@/assets/images/4.jpg";
import book5 from "@/assets/images/5.jpg";

const books = [
  {
    id: 1,
    title: "Alkimyogar",
    author: "Paulo Koelo",
    duration: "2:30:00",
    rating: 4.5,
    image: book1,
  },
  {
    id: 2,
    title: "Atom odatlar",
    author: "James Clear",
    duration: "1:45:00",
    rating: 4,
    image: book2,
  },
  {
    id: 3,
    title: "Bemor",
    author: "Abdulla Qahhor",
    duration: "3:15:00",
    rating: 3.5,
    image: book3,
  },
  {
    id: 4,
    title: "Alvido bolalik",
    author: "Tohir Malik",
    duration: "2:00:00",
    rating: 5,
    image: book4,
  },
  {
    id: 5,
    title: "Chol va dengiz",
    author: "Ernest Xeminguey",
    duration: "2:45:00",
    rating: 3,
    image: book5,
  },
];

export function LatestAudioBooks() {
  return (
    <div className="container py-5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Yangi audio kitoblar</h2>
        <Link
          to="/audio-books"
          className="flex items-center text-[#6243C3] font-medium text-sm"
        >
          Barchasini ko'rish{" "}
          <FaArrowRightLong className="ml-2 text-[#6243C3]" />
        </Link>
      </div>
      <BookCard books={books} />
    </div>
  );
}
