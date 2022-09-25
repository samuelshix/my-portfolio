import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button"
// Local Data
import data from "../data/portfolio.json";

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
                <Button></Button>
                <title>{data.name}</title>
            </Head>
            <div className="container mx-auto mb-10">
                <Header
                    handleProjectScroll={handleProjectScroll}
                    handleWorkScroll={handleWorkScroll}
                    handleAboutScroll={handleAboutScroll}
                />
                <div className="desktop:mt-20 mt-10">
                    <div className="mt-5">
                        <h1
                            ref={textOne}
                            className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
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
                    </div>

                    <Socials className="mt-2 laptop:mt-5" />
                </div>
                <div
                    className="tablet:mt-20 desktop:mt-36 mx-0 p-2 z-10 laptop:p-0 tablet:m-2 mob:mt-5 mob:w-full"
                    ref={projectRef}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                    <h1 className="text-6xl translate-y-2.5 "><b>Favorite projects.</b></h1>
                    <div className="laptop:px-36 mob:p-5 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-md text-white">
                        {data.projects.map((project) => (
                            <WorkCard
                                key={project.id}
                                img={project.imageSrc}
                                desc={project.imageDesc}
                                name={project.title}
                                description={project.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-10 mx-0 p-2 -translate-x-2 -translate-y-6 laptop:p-0 tablet:m-2 mob:mt-5 mob:w-full" >
                    <div className="laptop:px-24 mob:p-5 -mt-1 bg-indigo-200 rounded-lg z-0" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <h1 className="-mt-5 text-5xl mb-16 font-black tablet:translate-y-12 mob:translate-y-9">
                            Other projects.
                        </h1>
                        <div className="mob:w-full grid laptop:grid-cols-2 mob:grid-cols-1 laptop:gap-10">
                            {data.other_rel_projects.map((service, index) => (
                                <div className="mt-5 transition-all ease-out duration-300 hover:scale-105 cursor-pointer" key={index} >
                                    <ServiceCard
                                        key={index}
                                        name={service.title}
                                        description={service.description}
                                    />
                                    {service.imageSrc && <img src={service.imageSrc} />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="mt-10 p-2 laptop:p-0"
                    ref={workRef}
                >
                    <h1 className="tablet:m-10 text-5xl text-right font-black tablet:translate-y-12 mob:translate-y-9">
                        Work.
                    </h1>
                    <div className="laptop:px-30 mob:p-5 mt-5 bg-gradient-to-br from-amber-200 to-orange-300 bg-orange-100 rounded-lg tablet:m-10 mob:mt-5 mob:w-full grid laptop:grid-cols-2 mob:grid-cols-1 laptop:gap-5" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        {data.other_projects.map((service, index) => (
                            <div className="mt-10 mob:mt-0 bg-orange-100 rounded-md"
                                key={index}>
                                <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300">
                                    <h1 className="text-3xl mob:text-2xl font-bold" >{service.title}</h1>
                                    <ul className="py-2 rounded-lg mt-1 text-xl w-full opacity-50">
                                        {data.aboutpara.map((point, index) => (<li key={index}>{"• " + point}</li>))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="mt-5 laptop:mt-20 tablet:mt-10 p-5 laptop:p-0"
                    ref={aboutRef}
                >
                    <h1 className="tablet:my-1 text-4xl font-bold">About.</h1>
                    <ul className="tablet:mb-20 mt-1 w-full">
                        {data.aboutpara.map((point, index) => (<li key={index}>{"• " + point}</li>))
                        }
                    </ul>
                    <h1 className="tablet:mt-20 mob:mt-10 text-2xl font-bold">Coursework:</h1>
                    <div className="mt-5 mob:mt-1 tablet:mb-10">
                        {data.courses.map((course, index) => (
                            <div className="my-1 courses p-1 bg-slate-200 mr-2 rounded-md inline-block" key={index}>{course}</div>
                        ))}
                    </div>
                    <h1 className="mt-20 text-2xl font-bold">Languages and Technologies:</h1>
                    <div className="mt-5 mob:mt-1 tablet:mb-10">
                        {data.languages.map((course, index) => (
                            <div className="my-1 courses p-1 bg-green-100 mr-2 rounded-md inline-block" key={index}>{course}</div>
                        ))}
                        {data.technologies.map((course, index) => (
                            <div className="my-1 courses p-1 bg-green-200 mr-2 rounded-md inline-block" key={index}>{course}</div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
