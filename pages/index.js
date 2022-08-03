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
    const workRef = useRef();
    const aboutRef = useRef();
    const textOne = useRef();
    const textTwo = useRef();
    const textThree = useRef();
    const textFour = useRef();

    // Handling Scroll
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

    useIsomorphicLayoutEffect(() => {
        stagger(
            [
                textOne.current,
                textTwo.current,
                textThree.current,
                textFour.current,
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
                    handleWorkScroll={handleWorkScroll}
                    handleAboutScroll={handleAboutScroll}
                />
                <div className="laptop:mt-20 mt-10">
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
                    className="laptop:mt-36 p-2 laptop:p-0 tablet:m-2 laptop:w-5/6 mob:mt-5 mob:w-full"
                    ref={workRef}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                    <h1 className="text-6xl translate-y-2.5 "><b>Favorite projects:</b></h1>
                    <div className="laptop:px-36 mob:p-5 bg-indigo-300 rounded-md text-white">
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
                <div className="mt-20 laptop:mt-30 p-2 laptop:p-0" >
                    <h1 className="tablet:m-10 text-4xl text-bold">
                        Other projects
                    </h1>
                    <div className="mt-5 tablet:m-10 laptop:w-5/6 mob:mt-5 mob:w-full gap-6" style={{ marginLeft: "auto", marginRight: "auto" }}>
                        {data.other_rel_projects.map((service, index) => (
                            <div className="laptop:mt-20 mob:mt-5 transition-all ease-out duration-300 hover:scale-105 cursor-pointer" key={index} >
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
                <div className="mt-20 laptop:mt-30 p-2 laptop:p-0">
                    <h1 className="tablet:m-10 text-4xl text-bold">
                        Past Experience.
                    </h1>
                    <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                        {data.other_projects.map((service, index) => (
                            <div className="mt-10"
                                key={index}>
                                <ServiceCard
                                    key={index}
                                    name={service.title}
                                    description={service.description}
                                    imageUrl={service.imageUrl}
                                    imageSrc={service.imageSrc}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="mt-10 laptop:mt-40 p-2 laptop:p-0"
                    ref={aboutRef}
                >
                    <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
                    <ul className="tablet:m-10 mt-1 text-xl laptop:text-3xl w-full laptop:w-3/5">
                        {data.aboutpara.map((point, index) => (<li key={index}>{"• " + point}</li>))
                        }
                    </ul>
                    <h1 className="tablet:m-10 text-2xl">Coursework.</h1>
                    <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
                        {data.courses.map((course, index) => (
                            <h1 key={index}>{course}</h1>
                        ))}
                    </div>
                    <h1 className="tablet:m-10 text-2xl">Languages:</h1>
                    <p className="tablet:m-10">Javascript, Python, Java, SQL</p>
                    <h1 className="tablet:m-10 text-2xl">Technologies:</h1>
                    <p className="tablet:m-10">ReactJS, jQuery/AJAX, Django/Django REST, D3, Postgresql, MySQL, Git, Github Actions, Cron, Pandas, Vercel, Heroku, DigitalOcean</p>
                </div>
                <Footer />
            </div>
        </>
    );
}
