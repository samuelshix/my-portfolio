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
                className="h-full w-full object-cover max-h-96"
                src={element}
            ></img>
            <h1 className="legend text-md font-light mt-2">{desc[i]}</h1>
        </div>)
    }
    return (
        <div className="overflow-hidden hover:text-white hover:shadow-xl bg-white/5 hover:bg-white/10 duration-300 cursor-pointer rounded-lg p-2 top-0 laptop:p-4 first:ml-0">
            <h1 className="text-2xl font-medium">
                {name ? name : "Project Name"}
            </h1>
            <h2 className="text-xl opacity-80">
                {description ? description : "Description"}
            </h2>
            <div>
                {(img.length > 1) ?
                    <Carousel
                        className="overflow-hidden rounded-lg transition-all ease-out h-48 mob:h-auto"
                    >{images}</Carousel>
                    : images[0]
                }
            </div>
        </div>
    );
};

export default WorkCard;
