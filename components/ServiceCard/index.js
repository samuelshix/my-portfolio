import React from "react";
import Image from "next/image";
const ServiceCard = ({ name, description, imageUrl, imageSrc }) => {
    return (
        <>
            <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 cursor-pointer">
                <h1 className="text-3xl mob:text-2xl font-bold">{name ? name : "Heading"}</h1>
                <p className="mt-5 opacity-40 text-xl mob:text-m">
                    {description
                        ? description
                        : ""}
                </p>
                {imageSrc && <a target="_blank" rel="noreferrer" href={imageUrl}><img className="transition-all ease-out duration-300 hover:scale-105 cursor-pointer" src={imageSrc} /></a>}
            </div>
        </>
    );
};

export default ServiceCard;
