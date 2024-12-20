
import { useLoaderData } from "react-router"

function Search() {
    const books = useLoaderData();

  return (
    <div>
        {
        books.map((book)=>{
            return (
                <div key={book.id}>

                </div>
            )
        })
    }
    </div>
  )
}

export default Search