import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import data from "../../data/portfolio.json";

// for project feature slide shows
const WorkCard = ({ img, desc, name, description, url }) => {
    let images = []
    for (let i = 0; i < img.length; i++) {
        const element = img[i];
        images.push(<div>
            <img
                alt={name}
                className="h-full w-full object-cover"
                src={element}
            ></img>
            <h1 className="legend text-5xl font-medium">{desc[i]}</h1>
        </div>)
    }
    return (
        <div
            className="overflow-hidden cursor-pointer rounded-lg p-2 laptop:p-4 first:ml-0"
        >
            <h1 className="mt-5 text-3xl font-medium">
                {name ? name : "Project Name"}
            </h1>
            <h2 className="text-xl opacity-80">
                {description ? description : "Description"}
            </h2>
            {url ? <Carousel
                className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 h-48 mob:h-auto"
            >
                {images}
            </Carousel> :
                <Carousel
                    className="overflow-hidden rounded-lg transition-all ease-out h-48 mob:h-auto"
                >
                    {images}
                </Carousel>}
        </div>
    );
};

export default WorkCard;
