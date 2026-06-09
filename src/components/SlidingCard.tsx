import "../css/SlidingCard.css";

type DevCard = {
    id: string;
    title: string;
    description: string;
    image: string;
};

type SlidingCardProps = {
    cards: DevCard[];
    onSelect: (card: DevCard) => void;
};

const SlidingCard = ({ cards, onSelect }: SlidingCardProps) => {
    return (
        <section className="dev-slider-section">

            <div className="slider-header">
                <h1>Academic Projects</h1>

                <p>
                    Modern applications and systems I developed and have collaborated on. These are academic and personal projects.
                </p>
            </div>

            <div className="dev-slider">

                {cards.map((card) => (

                    <div
                        className="dev-card"
                        key={card.id}
                        onClick={() => onSelect(card)}
                    >

                        <div className="dev-card-image">
                            <img
                                src={card.image}
                                alt={card.title}
                            />
                        </div>

                        <div className="dev-card-content">

                            <h2>{card.title}</h2>

                            <p>{card.description}</p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default SlidingCard;