import { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);

    fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        searchTerm
      )}&limit=10`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.docs) {
          const formattedBooks = data.docs.map((book) => ({
            id: book.key,
            title: book.title,
            author: book.author_name?.[0] || "Unknown Author",
            cover_id: book.cover_i,
            rating: (Math.random() * 2 + 3).toFixed(1),
          }));
          setBooks(formattedBooks);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error searching books:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex-1 p-8">
      <form onSubmit={handleSearch} className="flex gap-2 mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for books..."
          className="input input-bordered flex-1"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={
                    book.cover_id
                      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                      : "/api/placeholder/200/300"
                  }
                  alt={book.title}
                  className="rounded-xl h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-sm">{book.title}</h3>
                <p className="text-xs text-base-content/70">{book.author}</p>
                <div className="flex items-center">
                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input
                        key={star}
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        checked={Math.floor(book.rating) >= star}
                        readOnly
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm">{book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
