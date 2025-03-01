import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
    return (
        <div className={`${className} text-black mob:flex-nowrap border-white/50`}>
            {yourData.socials.map((social, index) => (
                <div className="group flex flex-row text-white hover:ml-5 ease-in-out duration-300 ml-0" key={index}>
                    <p className="mr-2 font-light">&#9654;</p>
                    {/* <p className="mr-2">{social.title}:</p> */}
                    <div className=" font-light cursor-pointer" onClick={() => window.open(social.link)}>
                        {social.link}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Socials;
