import "./Carousel.css";

// Create Better Carousel
export default function Carousel() {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <section class="slider-wrapper">
          <button class="slide-arrow" id="slide-arrow-prev">
            &#8249;
          </button>

          <ul class="slides-container" id="slides-container">
            <li class="slide">S1</li>
            <li class="slide">S2</li>
            <li class="slide">S3</li>
            <li class="slide">S4</li>
          </ul>

          <button class="slide-arrow" id="slide-arrow-next">
            &#8250;
          </button>
        </section>
      </div>
    </div>
  );
}
