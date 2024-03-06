import React, { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

import "./Carousel.css"

type ImageSliderProps = {
    imageUrls: string[]
}

export default function Carousel ({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)
    
    return (
        <div>
            <img src={imageUrls[imageIndex]} alt="project-carousel" className="carousel" />
            <button className="carousel-bttn left">
                <ArrowBigLeft />
            </button>
            <button className="carousel-bttn right">
                <ArrowBigRight />
            </button>
        </div>
    )
}