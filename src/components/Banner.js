import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export default function Banner() {
    return (
        <div className="relative">

            <div className="absolute w-full h-32 bg-gradient-to-t from-bg-gray-100 to to-transparent bottom-0 z-20"/>

            <Carousel autoPlay 
            infiniteLoop 
            showStatus={false} 
            showIndicators={false}
            showThumbs={false} 
            interval={5000}>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/gi1" alt="carousel image" />
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/6ff" alt="carousel image" />
                </div>
                <div>
                    <img loading="lazy" src="https://links.papareact.com/7ma" alt="carousel image" />
                </div>
            </Carousel>
        </div>
    )
}
