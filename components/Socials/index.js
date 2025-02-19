import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
    return (
        <div className={`${className} text-black mob:flex-nowrap border-white/50`}>
            {yourData.socials.map((social, index) => (
                <div className="flex flex-row text-white" key={index}>
                    <p className="mr-2">{social.title}:</p>
                    <div className="text-white font-light hover:text-yellow-100 transition-all duration-300 cursor-pointer mb-2" onClick={() => window.open(social.link)}>
                        {social.link}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Socials;
