import "../css/SlidingCard.css";

type DevCard = {
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
                <h1>Development Projects</h1>

                <p>
                    Modern applications and systems I developed and I have collaborated with.
                </p>
            </div>

            <div className="dev-slider">

                {cards.map((card, index) => (
                    
                    <div
                        className="dev-card"
                        key={index}
                        onClick={() => onSelect(card)}
                    >
                         
                        <div className="dev-card-image">
                            <img src={card.image} alt={card.title} />
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