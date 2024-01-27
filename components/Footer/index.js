import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="p-5 bg-white/200 backdrop-blur-md rounded-2xl mt-10">
                <h1 className="text-2xl font-bold">Contact.</h1>
                <div className="mt-3">
                    <Socials />
                </div>
            </div>
        </>
    );
};

export default Footer;
