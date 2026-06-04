import "../css/PopUp.css";
import { projectDataList } from "../data/ProjectDataList";

type Props = {
    data: any;
    onClose: () => void;
};

export default function PopUp({ data, onClose }: Props) {

    if (!data) return null;

    const category =
        projectDataList[data.id as keyof typeof projectDataList];

    if (!category) return null;

    return (
        <div
            className="popup-overlay"
            onClick={onClose}
        >

            <div
                className="popup-box"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="popup-close"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h1>{category.title}</h1>

                {category.projects.map((project, index) => (

                    <div
                        className="project-item"
                        key={index}
                    >

                        <h2>{project.subtitle}</h2>

                        <p>{project.description}</p>

                        {/* TOOLS */}

                        <div className="tools-grid">

                            {project.tools?.map((tool, toolIndex) => (

                                <div
                                    className="tool-card"
                                    key={toolIndex}
                                >

                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                    />

                                    <span>{tool.name}</span>

                                </div>

                            ))}

                        </div>

                        {/* IMAGES */}

                        <div className="image-grid">

                            {project.images?.map((image, imageIndex) => (

                                <img
                                    key={imageIndex}
                                    src={image}
                                    alt={project.subtitle}
                                />

                            ))}

                        </div>

                        {/* VIDEO */}

                        {project.video && (

                            <video controls>

                                <source
                                    src={project.video}
                                />

                            </video>

                        )}

                    </div>

                ))}

            </div>

        </div>
    );
}