import AmongUsPic from "../assets/amongus-1.png";
import AmongUsUFO from "../assets/amongus-ufo.png";

const Home = () => {
    return (
        <div className="home-container">
            <h1>AmongUs Crewmate Creator!</h1>
            <h4>Create your AmongUs crew before sending them into space!</h4>
            <img className="amongus" src={AmongUsPic} />
            <img className="amongus-ufo" src={AmongUsUFO} />
        </div>
    );
};

export default Home;