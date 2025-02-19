import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const WorkCard = ({ data }) => {
    let images;

    if (Array.isArray(data.imageSrc) && data.imageSrc.length > 0) {
        images = "PROJECT_IMAGE"
    } else if (typeof data.imageSrc === 'string') {
        images = "THUMBNAIL"
    } else {
        images = null;
    }

    const handleClick = () => {
        if (data.url) {
            window.open(data.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="h-full flex flex-col rounded-lg bg-white/10 p-2 laptop:p-4 shadow-lg shadow-yellow-100/10 hover:shadow-lg hover:shadow-yellow-100/70 transition-all duration-300">
            <div className="flex flex-row justify-between items-center mb-2">
                <h1 className="text-2xl font-medium">
                    {data.title || "Project Name"}
                </h1>
                {images === "THUMBNAIL" ? (
                    <img src={data.imageSrc} alt={data.title} className="w-10 h-10" />
                ) : null}
            </div>

            <h2 className="text-md opacity-80 mb-2">
                {Array.isArray(data.description)
                    ? data.description.join(' • ')
                    : data.description
                }
            </h2>

            <div className="flex-grow">
                {images === "PROJECT_IMAGE" && data.url ? (
                    <div
                        onClick={handleClick}
                        className="relative w-full h-full cursor-pointer group"
                    >
                        <img
                            src={data.imageSrc[0]}
                            alt={data.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium">
                                View Project →
                            </span>
                        </div>
                    </div>
                ) : data.embeddedUrl ? (
                    <iframe
                        className="w-full h-full"
                        src={data.embeddedUrl}
                        title={data.title}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default WorkCard;
