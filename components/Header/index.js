import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import { Popover } from "@headlessui/react";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleProjectScroll, handleWorkScroll, handleAboutScroll }) => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    const renderButtons = () => (
        <>
            <Button onClick={handleProjectScroll}>Projects</Button>
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
        </>
    );

    return (
        <>
            <Popover className="block tablet:hidden">
                {({ open }) => (
                    <>
                        <div className="flex items-center justify-between p-2 laptop:p-0">
                            <h1 onClick={() => handleNavigation("/")} className="font-medium cursor-pointer p-2 laptop:p-0">
                                {data.name}
                            </h1>
                            <Popover.Button>
                                <img className="h-3" src={`/images/${!open ? "menu.svg" : "cancel.svg"}`} alt="menu" />
                            </Popover.Button>
                        </div>
                        <Popover.Panel className="absolute right-0 z-10 w-11/12 p-4 bg-white shadow-md rounded-md">
                            <div className="grid grid-cols-1">
                                {renderButtons()}
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <div className="sticky top-0 bg-gradient-to-r from-white/5 to-white/10 py-2 z-50 hidden tablet:flex header rounded-xl">
                <div className="flex flex-row items-center justify-between container mx-auto px-10">
                    <Button type="primary">
                        <h1 onClick={() => handleNavigation("/")} className="font-medium cursor-pointer mob:p-2 laptop:p-0">
                            {data.name}
                        </h1>
                    </Button>
                    <div className="flex">
                        {renderButtons()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
