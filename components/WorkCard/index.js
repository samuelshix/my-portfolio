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

    return (
        <div className="overflow-hidden rounded-lg bg-white/50 p-2 top-0 laptop:p-4 first:ml-0">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-medium">
                    {data.title || "Project Name"}
                </h1>
                {images === "THUMBNAIL" ? (<img src={data.imageSrc} alt={data.title} className="w-10 h-10" />) : null}
            </div>
            <h2 className="text-md opacity-80">
                {Array.isArray(data.description)
                    ? data.description.join(' • ')
                    : data.description
                }
            </h2>


            {data.url && (
                <div>
                    <a href={data.url} target="_blank" rel="noreferrer">Project Link</a>
                </div>
            )}

            <div>
                {/* {images.length > 1 ? (
                    <Carousel className="overflow-hidden rounded-lg transition-all ease-out h-48 mob:h-auto">
                        {images}
                    </Carousel>
                ) : (
                    images[0] || <p>No images available</p>
                )} */}
                {
                    images === "PROJECT_IMAGE" ? (<img src={data.imageSrc[0]} alt={data.title} className="w-full h-full object-cover max-h-96" />) : null
                }


            </div>
            <div>
                {data.embeddedUrl && (
                    <iframe className="w-full" height="315" src={data.embeddedUrl}></iframe>
                )}
            </div>
        </div>
    );
};

export default WorkCard;
