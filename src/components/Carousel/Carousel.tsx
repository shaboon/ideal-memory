import React, { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react"

import "./Carousel.css"

type ImageSliderProps = {
    images: {
        url: string
        alt: string
        title: string
        desc: string
        link: string
    }[]
}

export default function Carousel ({ images }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showPrevSlide() {
        setImageIndex(index => {
            if (index === 0) return images.length - 1
            return index - 1
        })
    }
    function showNextSlide() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }
    
    return (
        <section className="carousel-wrapper" style={{width: "100%", height: "100%", position: "relative", overflow:"hidden"}}>
                    <a href={images[imageIndex].link} target="_blank" style={{width: "100%", height: "100%", display: "flex"}}>
                        {images.map(({ url, alt }) => (
                            <img key={url} src={url} alt={alt} className="carousel-content" style={{translate: `${-100 * imageIndex}%`}} />
                        ))}
                        <article className="content-info">
                            {images[imageIndex].title && <h2>{images[imageIndex].title}</h2>}
                            {images[imageIndex].desc && <p>{images[imageIndex].desc}</p>}
                        </article>
                    </a>
            <button className="carousel-bttn left" onClick={showPrevSlide} aria-label="Carousel Button Scroll Left">
                <ArrowBigLeft />
            </button>
            <button className="carousel-bttn right" onClick={showNextSlide} aria-label="Carousel Button Scroll Right">
                <ArrowBigRight />
            </button>
            <div style={{position: "absolute", bottom: ".5rem", left: "50%", translate: "-50%"}}>
                {images.map((_, index) => (
                    <button className="index-bttns" key={index} onClick = {()=> setImageIndex(index)} aria-label={`View Image ${index}`}>
                        {index === imageIndex ? <CircleDot aria-hidden/> : <Circle />}
                    </button>
                ))}
            </div>
        </section>
    )
}