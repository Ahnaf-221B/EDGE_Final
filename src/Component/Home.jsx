import { useState, useEffect } from "react";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://openlibrary.org/search.json?q=fiction&limit=12")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

  return (
    <div className="p-20">
      <h2 className="text-2xl font-bold mb-4">Recommended Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {books.map((book) => (
          <div key={book.key} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "/api/placeholder/200/300"
                }
                alt={book.title}
                className="h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-sm">{book.title}</h3>
              <p className="text-xs">
                {book.author_name?.[0] || "Unknown Author"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
