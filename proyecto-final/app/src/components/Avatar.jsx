import neutral from "../assets/sensei-neutral.png";
import happy from "../assets/sensei-happy.png";
import angry from "../assets/sensei-angry.png";
import surprised from "../assets/sensei-surprised.png";
import thinking from "../assets/sensei-thinking.png";

const images = {
    neutral,
    happy,
    angry,
    surprised,
    thinking
};

export default function Avatar({ emotion }) {
    return (
        <div className="avatar-container">
            <img
                src={images[emotion] || images.neutral}
                alt="Sensei"
                className="avatar-img"
            />
        </div>
    );
}
