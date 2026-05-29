import "../css/PopUp.css";



type Tool = {
    name: string;
    icon: string;
};

type ProjectType = {
    title: string;
    description: string;
    image: string;
    images?: string[];
    video?: string;
    tools?: Tool[];
};

type Props = {
    data: ProjectType | null;
    onClose: () => void;
};

export default function PopUp({ data, onClose }: Props) {

    if (!data) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>

            <div
                className="popup-box"
                onClick={(e) => e.stopPropagation()}
            >

                {/* CLOSE */}
                <button className="popup-close" onClick={onClose}>
                    ✕
                </button>

                {/* HEADER */}
                <div className="popup-header">

                    <img
                        src={data.image}
                        alt={data.title}
                        className="popup-main-img"
                    />

                    <div className="popup-title">

                        <h1>{data.title}</h1>

                        <p>{data.description}</p>

                    </div>

                </div>

                {/* TOOLS */}
                {data.tools && (
                    <div className="popup-section">

                        <h2>Tools Used</h2>

                        <div className="tools-grid">

                            {data.tools.map((tool, i) => (
                                <div className="tool-card" key={i}>

                                    <img src={tool.icon} />

                                    <p>{tool.name}</p>

                                </div>
                            ))}

                        </div>

                    </div>
                )}

                {/* IMAGES */}
                {data.images && (
                    <div className="popup-section">

                        <h2>Project Screenshots</h2>

                        <div className="image-grid">

                            {data.images.map((img, i) => (
                                <img key={i} src={img} />
                            ))}

                        </div>

                    </div>
                )}

                {/* VIDEO */}
                {data.video && (
                    <div className="popup-section">

                        <h2>Demo Video</h2>

                        <video controls>
                            <source src={data.video} />
                        </video>

                    </div>
                )}

            </div>

        </div>
    );
}