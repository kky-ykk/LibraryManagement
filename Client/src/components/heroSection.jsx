import axios from "axios";
import { useEffect, useState } from "react";

export default function HeroSection() {

  const [books, setBooks] = useState(null); // Use state to store books

  async function getBooks() {
    try {
      const response = await axios.get("http://localhost:3000/api/book/getall");
      setBooks(response.data.books); // Update state with the fetched data
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  console.log("books:", books);

  return (
    <>
      {/* Carousel Section */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        style={{ margin: '-2px' }}
      >
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "9" }}>
            <form className="d-flex justify-content-center">
              <input
                className="form-control w-75 bg-white text-dark"
                type="search"
                placeholder="Search books..."
                aria-label="Search"
              />
            </form>
          </div>
          {/* Carousel Images */}
          <div className="carousel-item active">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20220415/pngtree-open-old-book-in-school-library-with-blurry-bookshelves-photo-image_36027458.jpg"
              className="d-block w-100"
              style={{
                filter: "brightness(55%)",
                objectFit: "cover",
                height: "550px",
              }}
              alt="Books"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://png.pngtree.com/background/20230527/original/pngtree-an-old-bookcase-in-a-library-picture-image_2760144.jpg"
              className="d-block w-100"
              style={{
                filter: "brightness(55%)",
                objectFit: "cover",
                height: "550px",
              }}
              alt="Bookshelf"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/realistic-books-shelf-library_23-2151359528.jpg"
              className="d-block w-100"
              style={{
                filter: "brightness(55%)",
                objectFit: "cover",
                height: "550px",
              }}
              alt="Library"
            />
          </div>
        </div>
      </div>

      {/* Book Cards Section */}
      <div className="container my-5">
        <h1 style={{ textAlign: "center" }}>Books</h1>

        {/* Responsive flexbox layout for books */}
        <div className="row d-flex justify-content-center">
          {
            books ? books.map((book, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={idx}>
                <div className="card m-3" style={{ width: "100%", minHeight: "450px" }}>
                  <img src={book.imageUrl} className="card-img-top" alt={book.name} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">By {book.author}</h6>
                    <p className="card-text">{book.description}</p>
                  </div>
                </div>
              </div>
            )) : <h3>Loading...</h3>
          }
        </div>
      </div>
    </>
  );
}
