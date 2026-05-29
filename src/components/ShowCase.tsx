import "../css/Showcase.css";

type ShowcaseProps = {
    title: string;
    description: string;
    image?: string;
    video?: string;
};

const ShowCase = ({
    title,
    description,
    image,
    video
}: ShowcaseProps) => {
    return (
        <div className="showcase-card">

            <div className="showcase-media">

                {video ? (
                    <video
                        src={video}
                        controls
                        autoPlay
                        muted
                        loop
                    />
                ) : (
                    <img src={image} alt={title} />
                )}

            </div>

            <div className="showcase-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default ShowCase;