import "../css/ProjectCard.css";
import Button from "./Button";

type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
};

const ProjectCard = ({
    title,
    description,
    tech
}: ProjectCardProps) => {
    return (
        <div className="project-card">

            <div className="project-content">

                <h2>{title}</h2>

                <p>{description}</p>

                <div className="project-tech">
                    {tech.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>

                <div className="project-buttons">
                    <Button variant="primary">
                        Live Demo
                    </Button>

                    <Button variant="ghost">
                        GitHub
                    </Button>
                </div>

            </div>

        </div>
    );
};

export default ProjectCard;