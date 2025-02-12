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
            <div className="mx-auto mt-16 py-5 mb-10 container">
                <ProjectSection
                    title="Projects."
                    ref={projectRef}
                    data={data.projects}
                    bgColor="bg-indigo-500/20"
                    textColor="text-indigo-900"
                />
                <WorkSection
                    title="Professional Experience."
                    ref={workRef}
                    data={data.other_projects}
                    bgColor="bg-sky-500/10"
                    textColor="text-sky-900"
                />
                <AboutSection ref={aboutRef} data={data} />
                <Footer />
            </div>
        </div>
    );
}


const ProjectSection = React.forwardRef(({ title, data, bgColor, textColor }, ref) => {
    return (
        <div className={`${bgColor} container mx-auto rounded-xl mb-20`} ref={ref}>
            <div className="relative p-5 rounded-t-xl">
                <h1 className="text-5xl font-bold text-indigo-900">
                    {title}
                </h1>
            </div>
            <div className={`backdrop-blur-sm grid grid-cols-1 laptop:grid-cols-4 mob:grid-cols-1 gap-5 p-8 auto-rows-fr ${textColor} rounded-xl`}>
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
        <div className={`${bgColor} container mx-auto rounded-xl mb-20`} ref={ref}>
            <div className="relative p-5 rounded-t-xl">
                <h1 className="text-5xl font-bold text-sky-900">
                    {title}
                </h1>
            </div>
            <div className={`backdrop-blur-sm grid grid-cols-1 laptop:grid-cols-4 mob:grid-cols-1 gap-5 p-8 ${textColor} rounded-xl`}>
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
        <div className="mt-5 laptop:mt-20 tablet:mt-10 p-5 bg-gradient-to-br from-teal-700 to-teal-800 text-white rounded-2xl shadow-xl" ref={ref}>
            <div className="bg-white/10 backdrop-blur-sm m-5 p-8 rounded-xl border border-white/10 shadow-inner">
                {/* Header Section */}
                <div className="max-w-3xl mb-12">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-teal-100 bg-clip-text text-transparent">About.</h1>
                    <p className="text-lg leading-relaxed text-teal-50">
                        I attended Indiana University, where I majored in Software Engineering and minored in History. I&apos;m genuinely excited about continuing to explore the fascinating world of web development. In my free time, I love fishing, traveling to new places, and diving into sci-fi novels.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
                    {/* Languages and Technologies */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-teal-100">Languages & Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {data.languages.map((lang, index) => (
                                <span key={index} className="px-3 py-1.5 bg-teal-600/30 hover:bg-teal-600/40 transition-colors rounded-lg text-sm font-medium">
                                    {lang}
                                </span>
                            ))}
                            {data.technologies.map((tech, index) => (
                                <span key={index} className="px-3 py-1.5 bg-teal-500/20 hover:bg-teal-500/30 transition-colors rounded-lg text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Coursework */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-teal-100">Coursework</h2>
                        <div className="flex flex-wrap gap-2">
                            {data.courses.map((course, index) => (
                                <span key={index} className="px-3 py-1.5 bg-white/10 hover:bg-white/15 transition-colors rounded-lg text-sm font-medium">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <h2 className="text-2xl font-semibold text-teal-100 mb-4">Contact</h2>
                    <div className="bg-white/5 p-4 rounded-xl">
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    );
});
AboutSection.displayName = 'AboutSection';
