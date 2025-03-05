import { useRef, useEffect, useState } from "react";
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
    const [isVisible, setIsVisible] = useState(false);
    const animatedSectionRef = useRef();

    // Scroll handlers
    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (animatedSectionRef.current) {
            observer.observe(animatedSectionRef.current);
        }

        return () => {
            if (animatedSectionRef.current) {
                observer.unobserve(animatedSectionRef.current);
            }
        };
    }, []);

    return (
        <div >
            <Head>
                <title>{data.name}</title>
                <meta name="description" content="Portfolio of Sam, a full stack engineer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Parallax speed={20} translateY={[0, 30]} className="will-change-transform">
                    <div className="w-full backdrop-blur-[2px] flex flex-row justify-left mt-[30vh] mb-36 mx-auto container p-12">
                        <div className="flex flex-col ">
                            <div className="relative flex z-10">
                                {/* Text Container */}
                                <div className="relative z-10">
                                    <h1
                                        ref={textOne}
                                        data-text="Samuel Shi"
                                        className="text-9xl font-light 
                                        text-white"
                                    >
                                        Samuel Shi
                                    </h1>
                                    <div
                                        className="border-2 border-white/40 rounded-xl p-5  shadow-lg shadow-yellow-100/50 text-sm mt-20 mb-10 text-white font-light max-w-2xl flex flex-row"
                                    >
                                        <p className="max-w-lg">
                                            Software Engineer specializing in scalable distributed systems, RESTful APIs, and event-driven architectures. Proficient in Java, Spring Boot, React, and Kafka, with expertise in microservices, cloud infrastructure (AWS, Gaia Cloud), and DevOps automation. Passionate about building high-performance backend systems, automating workflows, and optimizing API efficiency.
                                        </p>
                                        <div className="my-auto">
                                            <Image
                                                className="shadow-lg rounded-full object-cover opacity-80"
                                                src="/images/profile-picture.jpeg"
                                                alt="Profile Picture"
                                                width={288}
                                                height={288}
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,..."
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Socials className="relative top-10 left-10 mb-auto flex-none" />

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
                    bgColor="bg-black/40"
                    textColor="text-white"
                />
                <WorkSection
                    title="Professional Experience."
                    ref={workRef}
                    data={data.other_projects}
                    bgColor="bg-black/40"
                    textColor="text-white"
                />
                <AboutSection ref={aboutRef} data={data} />
                <Footer />
            </div>
            <p className="font-light z-[-1] bottom-5 left-5 fixed text-white text-xs">
                Credits to <a href="https://github.com/baunov/gradients-bg/tree/main" className="underline">Danil Baunov</a> for animations</p>
        </div>
    );
}


const ProjectSection = React.forwardRef(({ title, data, bgColor, textColor }, ref) => {
    return (
        <div className={`${bgColor} container mx-auto backdrop-blur-sm gradient-to-r from-black/10 to-black rounded-xl mb-20 p-10`} ref={ref}>
            <div className="relative ml-7">
                <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent inline-block">
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
                <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-yellow-200 to-lime-500 bg-clip-text text-transparent inline-block">
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
        <div className="mt-5 laptop:mt-20 tablet:mt-10 p-5 bg-black/40 text-white rounded-2xl shadow-xl backdrop-blur-sm " ref={ref}>
            <div className="m-5 p-10 rounded-xl">
                {/* Header Section */}
                <div className="max-w-3xl mb-12 bg-black/40 rounded-xl p-5">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-lime-200 to-green-400 bg-clip-text text-transparent inline-block">About.</h1>
                    <p className="text-lg leading-relaxed text-white">
                        I am a Software Engineer 2 at JP Morgan Chase, where I work on dispute resolution. If I have spare time, I enjoy working on web3 projects. I love fishing, traveling, and sci-fi novels.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
                    {/* Languages and Technologies */}
                    <div className="space-y-6 bg-black/40 rounded-xl p-5">
                        <h2 className="text-2xl font-semibold text-green-100">Languages & Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {data.languages.map((lang, index) => (
                                <span key={index} className="px-3 py-1.5 bg-green-500/40 hover:bg-green-500/50 hover:text-white hover:pointer transition-colors rounded-lg text-sm font-medium">
                                    {lang}
                                </span>
                            ))}
                            {data.technologies.map((tech, index) => (
                                <span key={index} className="px-3 py-1.5 bg-green-500/20 hover:bg-green-500/30 hover:text-white hover:pointer transition-colors rounded-lg text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Coursework */}
                    <div className="space-y-6 bg-black/40 rounded-xl p-5">
                        <h2 className="text-2xl font-semibold text-green-100">Coursework</h2>
                        <div className="flex flex-wrap gap-2">
                            {data.courses.map((course, index) => (
                                <span key={index} className="px-3 py-1.5 bg-green-500/20 rounded-lg text-sm font-medium">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 pt-8 bg-black/40 rounded-xl p-5">
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
