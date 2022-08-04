import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="tablet:mt-40 mob:mt-10 mob:p-5 p-2 laptop:p-0">
                <h1 className="mob:mt-10 text-2xl font-bold">Contact.</h1>
                <div className="mt-5">
                    <Socials />
                </div>
            </div>
        </>
    );
};

export default Footer;
