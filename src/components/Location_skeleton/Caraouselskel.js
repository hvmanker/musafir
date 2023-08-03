import tr from "./travel.jfif";
import "./Carouselskel.css";
export const Carousel2 = () => {
  return (
    <div
      id="carouselExampleAutoplayingsecondCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplayingsecondCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplayingsecondCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplayingsecondCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner c-main">
        <div className="carousel-item active c-item2">
          <img src={tr} className="d-block w-100 c-img2" alt="..." />
        </div>
        <div className="carousel-item c-item2">
          <img src={tr} className="d-block w-100 c-img2" alt="..." />
        </div>
        <div className="carousel-item c-item2">
          <img src={tr} className="d-block w-100 c-img2" alt="..." />
        </div>
      </div>
      <div className="carousel-name2">MUSAFIR</div>
      <button
        className="carousel-control-prev C-control"
        type="button"
        data-bs-target="#carouselExampleAutoplayingsecondCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next C-control"
        type="button"
        data-bs-target="#carouselExampleAutoplayingsecondCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel2;
