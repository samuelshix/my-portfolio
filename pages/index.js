import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button"
import Image from "next/image";
// Local Data
import data from "../data/portfolio.json";
import { Parallax } from "react-scroll-parallax";
import React from "react";

export default function Home() {
    // Refs for sections
    const projectRef = useRef();
    const workRef = useRef();
    const aboutRef = useRef();
    const textOne = useRef();
    const textTwo = useRef();

    // Scroll handlers
    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    // Animation effect
    useIsomorphicLayoutEffect(() => {
        stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
    }, []);

    return (
        <div>
            <Head>
                <title>{data.name}</title>
                <meta name="description" content="Portfolio of Sam, a full stack engineer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Parallax speed={20}>
                    <div className="bg-white/10 w-full backdrop-blur-sm px-20 py-5 pb-10 mob:px-3 flex flex-row justify-between mt-36 mx-auto container">
                        <div className="flex flex-col">
                            <h1
                                ref={textOne}
                                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-black underline w-4/5 mob:w-full laptop:w-4/5"
                            >
                                Hey, I&apos;m Sam.
                            </h1>
                            <b className="flex-grow">
                                <p
                                    ref={textTwo}
                                    className="text-3sm p-2"
                                >
                                    A full stack engineer
                                </p>
                            </b>

                            <Socials className="relative bottom-0 mt-auto flex-none" />
                        </div>
                        <div className="w-72 h-72">
                            <Image
                                className="shadow-lg rounded-full"
                                src="/images/profile-picture.jpeg"
                                alt="Profile Picture"
                                width={288}
                                height={288}
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                </Parallax>
            </div>
            <Header
                handleProjectScroll={() => scrollToSection(projectRef)}
                handleWorkScroll={() => scrollToSection(workRef)}
                handleAboutScroll={() => scrollToSection(aboutRef)}
            />
            <div className="mx-auto mt-16 py-5 mb-10">
                <Section
                    title="Professional Experience."
                    ref={workRef}
                    data={data.other_projects}
                    bgColor="bg-sky-500/10"
                    textColor="text-sky-900"
                />
                <Section
                    title="Projects."
                    ref={projectRef}
                    data={data.projects}
                    bgColor="bg-indigo-500/20"
                    textColor="text-indigo-900"
                />
                <AboutSection ref={aboutRef} data={data} />
                <Footer />
            </div>
        </div>
    );
}


const Section = React.forwardRef(({ title, data, bgColor, textColor }, ref) => (
    <div>
        <div className="container mx-auto mt-16 ">
            <h1 className={`text-4xl inline-block rounded-t-xl font-black ${textColor}`}>
                {title}
            </h1>
        </div>
        <div className={`${bgColor} container mx-auto rounded-xl`} ref={ref}>
            <div className={`backdrop-blur-sm grid grid-cols-1 laptop:grid-cols-2 mob:grid-cols-1 gap-5 p-8 ${textColor} rounded-xl`} style={{ marginLeft: "auto", marginRight: "auto" }}>
                {data.map((item, index) => (
                    <WorkCard key={index} data={item} />
                ))}
            </div>
        </div>
    </div>
));

const AboutSection = React.forwardRef(({ data }, ref) => (
    <div className="mt-5 laptop:mt-20 tablet:mt-10 p-5 bg-teal-700 text-white rounded-2xl" ref={ref}>
        <h1 className="tablet:my-1 text-4xl font-bold">About.</h1>
        <p>I attended Indiana University, where I majored in Software Engineering and minored in History. I&apos;m genuinely excited about continuing to explore the fascinating world of web development. In my free time, I love fishing, traveling to new places, and diving into sci-fi novels.</p>
        <div className="grid grid-cols-2">
            <div>
                <h1 className="mt-20 text-2xl font-bold">Languages and Technologies:</h1>
                <div className="mt-5 mob:mt-1 tablet:mb-10">
                    {data.languages.map((course, index) => (
                        <div className="my-1 courses p-1 bg-white/30 mr-2 rounded-md inline-block" key={index}>{course}</div>
                    ))}
                    {data.technologies.map((course, index) => (
                        <div className="my-1 courses p-1 bg-white/40 mr-2 rounded-md inline-block" key={index}>{course}</div>
                    ))}

                </div>
            </div>
            <div>
                <h1 className="tablet:mt-20 mob:mt-10 text-2xl font-bold">Coursework:</h1>
                <div className="mt-5 mob:mt-1 tablet:mb-10">
                    {data.courses.map((course, index) => (
                        <div className="my-1 courses p-1 bg-black/20 mr-2 rounded-md inline-block" key={index}>{course}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>
));
