import BookCard from "../BookCard/BookCard";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

function Home(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((parsedJson) => {
        setBooks(parsedJson);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row">
        {books.map((book, i) => (
          <div className="col-md-3">
            <BookCard key={i} data={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
