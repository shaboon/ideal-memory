import { React } from "react";
import "./modal.css";

function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button">&times;</button>
        <section class="slider-wrapper">
          <button class="slide-arrow" id="slide-arrow-prev">
            &#8249;
          </button>

          <button class="slide-arrow" id="slide-arrow-next">
            &#8250;
          </button>

          <ul class="slides-container" id="slides-container">
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Modal;
