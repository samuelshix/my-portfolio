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
                    <div className="w-full backdrop-blur-[2px] flex flex-row justify-between my-36 mx-auto container text-white outline outline-2 outline-white/40 rounded-xl p-12 shadow-lg shadow-yellow-100/50">
                        <div className="flex flex-col ">
                            <h1
                                ref={textOne}
                                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-light w-auto mob:w-full laptop:w-4/5 mb-1 text-yellow-100"
                            >
                                Samuel Shi.
                            </h1>
                            <b className="">
                                <p
                                    ref={textTwo}
                                    className="text-sm mb-10"
                                >
                                    A full stack engineer
                                </p>
                            </b>

                            <Socials className="relative bottom-0 mt-auto flex-none" />
                        </div>
                        <div className="my-auto">
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
            <div className="mx-auto mt-16 py-5 mb-10 container">
                <ProjectSection
                    title="Projects."
                    ref={projectRef}
                    data={data.projects}
                    bgColor="bg-black/10"
                    textColor="text-white"
                />
                <WorkSection
                    title="Professional Experience."
                    ref={workRef}
                    data={data.other_projects}
                    bgColor="bg-black/10"
                    textColor="text-white"
                />
                <AboutSection ref={aboutRef} data={data} />
                <Footer />
            </div>
        </div>
    );
}


const ProjectSection = React.forwardRef(({ title, data, bgColor, textColor }, ref) => {
    return (
        <div className={`${bgColor} container mx-auto backdrop-blur-sm gradient-to-r from-black/10 to-black rounded-xl mb-20 p-10`} ref={ref}>
            <div className="relative ml-7">
                <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                    {title}
                </h1>
            </div>
            <div className={`grid grid-cols-1 laptop:grid-cols-4 mob:grid-cols-1 gap-5 p-8 auto-rows-fr ${textColor} rounded-xl`}>
                {data.map((item, index) => (
                    <div key={index}
                        className={`${index === 0 ? 'laptop:col-span-3' : 'laptop:col-span-1'}`}>
                        <WorkCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
});
ProjectSection.displayName = 'ProjectSection';

const WorkSection = React.forwardRef(({ title, data, bgColor, textColor }, ref) => {
    return (
        <div className={`${bgColor} container mx-auto backdrop-blur-sm gradient-to-r from-black/10 to-black rounded-xl mb-36 p-10`} ref={ref}>
            <div className="relative ml-7">
                <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
                    {title}
                </h1>
            </div>
            <div className={`grid grid-cols-1 laptop:grid-cols-4 mob:grid-cols-1 gap-5 p-8 ${textColor} rounded-xl`}>
                {data.map((item, index) => (
                    <div key={index} className={`${index === 0 ? 'laptop:col-span-3' : ''}`}>
                        <WorkCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
});
WorkSection.displayName = 'WorkSection';
const AboutSection = React.forwardRef(({ data }, ref) => {
    return (
        <div className="mt-5 laptop:mt-20 tablet:mt-10 p-5 bg-gradient-to-br from-yellow-900/5 to-yellow-900/10 text-white rounded-2xl shadow-xl backdrop-blur-sm " ref={ref}>
            <div className="m-5 p-10 rounded-xl">
                {/* Header Section */}
                <div className="max-w-3xl mb-12 outline-5 outline-white rounded-xl border border-white/20 p-5">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-100 to-yellow-500 bg-clip-text text-transparent">About.</h1>
                    <p className="text-lg leading-relaxed text-white">
                        I am a Software Engineer 2 at JP Morgan Chase, where I work on dispute resolution. If I have spare time, I enjoy working on web3/blockchain projects. I love fishing, traveling, and sci-fi novels.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
                    {/* Languages and Technologies */}
                    <div className="space-y-6 outline-white rounded-xl border border-white/20 p-5">
                        <h2 className="text-2xl font-semibold text-yellow-100">Languages & Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {data.languages.map((lang, index) => (
                                <span key={index} className="px-3 py-1.5 bg-yellow-500/40 hover:bg-yellow-500/50 hover:text-white hover:pointer transition-colors rounded-lg text-sm font-medium">
                                    {lang}
                                </span>
                            ))}
                            {data.technologies.map((tech, index) => (
                                <span key={index} className="px-3 py-1.5 bg-yellow-500/20 hover:bg-yellow-500/30 hover:text-white hover:pointer transition-colors rounded-lg text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Coursework */}
                    <div className="space-y-6 outline-white rounded-xl border border-white/10 p-5">
                        <h2 className="text-2xl font-semibold text-yellow-100">Coursework</h2>
                        <div className="flex flex-wrap gap-2">
                            {data.courses.map((course, index) => (
                                <span key={index} className="px-3 py-1.5 bg-yellow-500/20 rounded-lg text-sm font-medium">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 pt-8 border-t border-white/30 outline-white rounded-xl border border-white/10 p-5">
                    <h2 className="text-2xl font-semibold shadow-lg mb-4">Contact</h2>
                    <div className="rounded-xl">
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    );
});
AboutSection.displayName = 'AboutSection';
