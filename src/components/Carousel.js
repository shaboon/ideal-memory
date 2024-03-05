import "./Carousel.css";

import cmsProject from "../assets/photos/project-images/cmsrunning.png";
import passGen from "../assets/photos/project-images/cmsrunning.png";
import finisNoct from "../assets/photos/project-images/cmsrunning.png";
import marvelDatabase from "../assets/photos/project-images/marvel.png";
import intstellarIndex from "../assets/photos/project-images/interstellar-index.herokuapp.com_.png";

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
            <li class="slide">
              <img src={cmsProject} />
            </li>
            <li class="slide">
              <img src={passGen} />
            </li>
            <li class="slide">
              <img src={finisNoct} />
            </li>
            <li class="slide">
              <img src={marvelDatabase} />
            </li>
            <li class="slide">
              <img src={intstellarIndex} />
            </li>
          </ul>

          <button class="slide-arrow" id="slide-arrow-next">
            &#8250;
          </button>
        </section>
      </div>
    </div>
  );
}
