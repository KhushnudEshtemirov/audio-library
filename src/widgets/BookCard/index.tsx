import { Rate } from "antd";
import { IoMdPlay } from "react-icons/io";
import { IoTime } from "react-icons/io5";

export function BookCard({ books }: { books: any }) {
  return (
    <div className="flex justify-between gap-5">
      {books.map((book: any) => (
        <div
          key={book.id}
          className="flex-1 flex flex-col gap-2 p-4 rounded-lg shadow-[0_0_14px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
        >
          <div className="w-full h-64 overflow-hidden rounded-lg">
            <img src={book.image} alt={book.title} />
          </div>
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600 text-sm">{book.author}</p>
          <p className="flex items-center gap-2 text-[#6243C3] font-medium text-sm">
            <IoTime /> {book.duration}
          </p>
          <Rate allowHalf defaultValue={book.rating} />
          <button className="group flex items-center justify-center gap-2 mt-2 text-[#6243C3] font-medium text-sm border border-[#6243C3] px-3 py-2 rounded-lg hover:bg-[#6243C3] hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#6243C3] text-white pl-1 group-hover:bg-white group-hover:text-[#6243C3] transition-colors duration-300">
              <IoMdPlay />
            </div>
            <span>Tinglash</span>
          </button>
        </div>
      ))}
    </div>
  );
}
