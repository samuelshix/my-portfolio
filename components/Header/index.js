import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import { Popover } from "@headlessui/react";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleProjectScroll, handleWorkScroll, handleAboutScroll }) => {
    const router = useRouter();
    return (
        <>
            <Popover className="block tablet:hidden mt-5">
                {({ open }) => (
                    <>
                        <div className="flex items-center justify-between p-2 laptop:p-0">
                            <h1
                                onClick={() => router.push("/")}
                                className="font-medium cursor-pointer p-2 laptop:p-0"
                            >
                                {data.name}
                            </h1>
                            <Popover.Button>
                                <img
                                    className="h-5"
                                    src={`/images/${!open ? "menu.svg" : "cancel.svg"
                                        }`}
                                ></img>
                            </Popover.Button>
                        </div>
                        <Popover.Panel className="absolute right-0 z-10 w-11/12 p-4 bg-white shadow-md rounded-md">

                            <div className="grid grid-cols-1">
                                <Button onClick={handleProjectScroll}>
                                    Projects
                                </Button>
                                <Button onClick={handleWorkScroll}>
                                    Work
                                </Button>
                                <Button onClick={handleAboutScroll}>
                                    About
                                </Button>
                                <Button
                                    onClick={() =>
                                        window.open(
                                            "mailto:samuel.li.shi@gmail.com"
                                        )
                                    }
                                >
                                    Contact
                                </Button>
                            </div>

                        </Popover.Panel>
                    </>
                )}
            </Popover>
            <div className="sticky bg-slate-700/50 px-5 py-2 top-0 z-10 hidden tablet:flex header">
                <div className="flex flex-row items-center justify-between container mx-auto px-10">
                    <Button type="primary">
                        <h1
                            onClick={() => router.push("/")}
                            className="font-medium cursor-pointer mob:p-2 laptop:p-0"
                        >
                            {data.name}
                        </h1>
                    </Button>
                    <div className="flex">
                        <Button onClick={handleProjectScroll}>Projects</Button>
                        <Button onClick={handleWorkScroll}>Work</Button>
                        <Button onClick={handleAboutScroll}>About</Button>
                        <Button
                            onClick={() =>
                                window.open("mailto:samuel.li.shi@gmail.com")
                            }
                        >
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
