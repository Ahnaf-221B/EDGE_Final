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
          const filteredBooks = data.docs.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

          const formattedBooks = filteredBooks.map((book) => ({
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
          className="rounded-lg border-black border input input-bordered flex-1"
        />
        <button type="submit" className="bg-black text-white w-[80px] h-[30px] border rounded-lg btn btn-primary">
          Search
        </button>
      </form>

      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 w-full">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id} className="card bg-base-100 shadow-2xl border-black border-2 rounded-lg">
                <figure className="px-4 pt-4">
                  <img
                    src={
                      book.cover_id
                        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                        : "https://via.placeholder.com/500x300"
                    }
                    alt={book.title}
                    className="rounded-xl h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h3 className="card-title text-3xl font-semi-bold">{book.title}</h3>
                  <p className="text-lg font-semibold text-base-content/70">{book.author}</p>
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
            ))
          ) : (
            <p className="text-center text-sm text-base-content/70">
              No books match your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
