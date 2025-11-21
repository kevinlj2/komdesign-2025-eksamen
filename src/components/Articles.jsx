import { Link } from "react-router-dom";
import { articles } from "../assets/lib/article";

export default function Articles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center">
      {articles.map((article) => (
        <div key={article.id} className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-black mb-4 text-center">
            {article.title}
          </h2>
          <Link
            to={`/${article.id}`}
            className="block hover:scale-105 transition"
          >
            <img
              src={article.img}
              alt={article.title}
              className="w-[450px] h-[300px] object-cover rounded shadow-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
