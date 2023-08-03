import "../css/carasoul.css";

export const Carasoul = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/14/85/114/baby-groot-guardians-of-the-galaxy-vol-2-4k-wallpaper-thumb.jpg"
            className="d-block w-100 c-img"
            alt="..."
          />
        </div>
        <div className="carousel-item c-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/524/145/191/guardians-of-the-galaxy-vol-2-baby-groot-chair-milano-spacecraft-wallpaper-thumb.jpg"
            className="d-block w-100 c-img"
            alt="..."
          />
        </div>
        <div className="carousel-item c-item">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/395/147/709/venom-movie-venom-superheroes-logo-wallpaper-thumb.jpg"
            className="d-block w-100 c-img"
            alt="..."
          />
        </div>
      </div>
      <div className="carousel-name">MUSAFIR</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
