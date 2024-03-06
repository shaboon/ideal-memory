import React, { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

import "./Carousel.css"

type ImageSliderProps = {
    imageUrls: string[]
}

export default function Carousel ({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showPrevSlide() {
        setImageIndex((index) => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }
    function showNextSlide() {
        setImageIndex((index) => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }
    
    return (
        <section>
            <img src={imageUrls[imageIndex]} alt="project-carousel" className="carousel" />
            <button className="carousel-bttn left" onClick={showPrevSlide}>
                <ArrowBigLeft />
            </button>
            <button className="carousel-bttn right" onClick={showNextSlide}>
                <ArrowBigRight />
            </button>
        </section>
    )
}