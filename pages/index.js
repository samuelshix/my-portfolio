import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button"
// Local Data
import data from "../data/portfolio.json";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
    // Ref
    const projectRef = useRef()
    const workRef = useRef();
    const aboutRef = useRef();
    const textOne = useRef();
    const textTwo = useRef();


    // Handling Scroll using refs defined for each section
    const handleProjectScroll = () => {
        window.scrollTo({
            top: projectRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };
    const handleWorkScroll = () => {
        window.scrollTo({
            top: workRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleAboutScroll = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    // Animation effect
    useIsomorphicLayoutEffect(() => {
        stagger(
            [
                textOne.current,
                textTwo.current
            ],
            { y: 30 },
            { y: 0 }
        );
    }, []);

    return (
        <>
            <Head>
                {/* <Button></Button>
                <title>{data.name}</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-2N3FBN7X6J"></script> */}
            </Head>
            <div>
                <div className="container mx-auto mt-24">
                    <Parallax speed={20}>
                        <div className="bg-white/10 w-2/3 backdrop-blur-sm px-10 py-5 pb-10 mob:px-3 flex flex-row">
                            <div className="mr-5">
                                <h1
                                    ref={textOne}
                                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-black underline w-4/5 mob:w-full laptop:w-4/5"
                                >
                                    {data.headerTaglineOne}
                                </h1>
                                <b>
                                    <p
                                        ref={textTwo}
                                        className="text-3sm p-2"
                                    >
                                        {data.headerTaglineTwo}
                                    </p>
                                </b>

                                <Socials className="mt-0" />
                            </div>
                            <img
                                className="h-72 bottom-[72px] border-4 border-white rounded-full shadow-lg"
                                src="./images/profile-picture.jpeg"
                            ></img>
                        </div>
                    </Parallax>
                </div>
                <Header
                    handleProjectScroll={handleProjectScroll}
                    handleWorkScroll={handleWorkScroll}
                    handleAboutScroll={handleAboutScroll}
                />
                <div className="container mx-auto px-10 py-5 mb-10 mob:px-3">
                    <div
                        className="tablet:mt-20 desktop:mt-36 p-2 z-10 laptop:p-0 tablet:m-2 mob:mt-5 mob:w-full"
                        ref={workRef}
                    >
                        <h1 className="text-4xl p-5 inline-block rounded-t-xl font-black bg-sky-500/10 backdrop-blur-sm text-sky-900">
                            Professional Experience.
                        </h1>
                        <div className="laptop:px-12 bg-sky-500/10 backdrop-blur-sm grid grid-cols-1 laptop:grid-cols-2 mob:grid-cols-1 gap-5 rounded-3xl rounded-tl-none py-16 text-sky-800" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            {data.other_projects.map((service, index) => (
                                <div className="mt-10 mob:mt-0 bg-white/40 rounded-xl"
                                    key={index}>
                                    <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300">
                                        <h1 className="text-3xl mob:text-2xl font-bold inline-block">{service.title}</h1>
                                        <img
                                            alt={service.title.split("@")[1]}
                                            src={service.imageSrc}
                                            className="w-10 h-10 rounded-full inline-block ml-2 transform -translate-y-[2px]"
                                        />
                                        <ul className="py-2 rounded-lg mt-1 text-md w-full opacity-80">
                                            {service.description.map((point, index) => (<li className="mb-2" key={index}>{"• " + point}</li>))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className="tablet:mt-20 desktop:mt-36 mx-0 p-2 z-10 laptop:p-0 tablet:m-2 mob:mt-5 mob:w-full"
                        ref={projectRef}
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                        <h1 className="text-4xl bg-indigo-500/20 backdrop-blur-sm p-5 inline-block rounded-t-xl text-indigo-900"><b>Favorite projects.</b></h1>
                        <div className="laptop:px-12 bg-indigo-500/20 backdrop-blur-sm rounded-3xl rounded-tl-none py-16">

                            {/* url={"test"}
                            desc={"test"}
                            name={"Solana Snapshot"}
                            description={"j"}
                            /> */}
                            <div className="laptop:px-12 grid grid-cols-2 rounded-b-3xl laptop:grid-cols-2 mob:grid-cols-1 gap-5 py-10 text-indigo-900">
                                {data.projects.map((project) => (
                                    <a href={project.url} rel="noreferrer" target="_blank" key={project.id}>

                                        <WorkCard
                                            img={project.imageSrc}
                                            url={project.url}
                                            desc={project.imageDesc}
                                            name={project.title}
                                            description={project.description}
                                            embeddedUrl={project.embeddedUrl}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-5 laptop:mt-20 tablet:mt-10 p-5 bg-teal-700 text-white rounded-2xl"
                        ref={aboutRef}
                    >
                        <h1 className="tablet:my-1 text-4xl font-bold">About.</h1>
                        <p>I attended Indiana University, where I majored in Software Engineering and minored in History. I'm genuinely excited about continuing to explore the fascinating world of web development. In my free time, I love fishing, traveling to new places, and diving into sci-fi novels.</p>
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
                    <Footer />
                </div>
            </div>
        </>
    );
}
