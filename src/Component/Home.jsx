import { useState, useEffect } from "react";




export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://openlibrary.org/search.json?q=fiction&limit=16")
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
    
    <div className=" pl-[20px]">
      <div className="flex flec-col gap-3">
        <button className="rounded-lg w-[60px] h-7 mt-5 mb-5 border-black border">All</button>
         <button className="rounded-lg w-[500px] h-7 mt-5 mb-5 bg-white border-black border">Search</button>
      </div>
      <h2 className="text-3xl font-bold mb-10">Recommended Books</h2>
      <div className="grid grid-cols-5 md:grid-cols-6 gap-10 w-[1200px] ">
        {books.map((book) => (
          <div
            key={book.key}
            className="card bg-base-100 shadow-2xl rounded-lg border-2 border-black "
          >
            <figure>
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "/api/placeholder/0/0"
                }
                alt={book.title}
                className="h-40 w-[200px]"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-bold">{book.title}</h3>
              <p className="text-md font-semibold">
                {book.author_name?.[0] || "Unknown Author"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
