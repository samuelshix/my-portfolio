import React from "react";
import portfolioData from "../../data/portfolio.json";

const ProjectCard = ({ title, description, imageSrc, url }) => (
    <div className="project-card p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
        <h2 className="text-xl font-bold mb-2">{title || "Untitled Project"}</h2>
        <p className="text-gray-700 mb-4">{description || "No description available."}</p>
        {imageSrc && (
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
        )}
        {url && (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                View Project
            </a>
        )}
    </div>
);

const ProjectList = () => {
    const { projects } = portfolioData;

    if (!projects || projects.length === 0) {
        return <p className="text-center text-gray-500">No projects available.</p>;
    }

    return (
        <div className="project-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    url={project.url}
                />
            ))}
        </div>
    );
};

export default ProjectList; 