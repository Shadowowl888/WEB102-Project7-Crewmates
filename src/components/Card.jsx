import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CrewmatePic from "../assets/crewmatePic.png";
import Black from "../assets/crewmatePic.png";
import Blue from "../assets/crewmatePic.png";
import Brown from "../assets/crewmatePic.png";
import Green from "../assets/crewmatePic.png";
import Orange from "../assets/crewmatePic.png";
import Pink from "../assets/crewmatePic.png";
import Purple from "../assets/crewmatePic.png";
import Red from "../assets/crewmatePic.png";
import White from "../assets/crewmatePic.png";
import Yellow from "../assets/crewmatePic.png";


const Card = (props) => {
    const [pic, setPic] = useState(CrewmatePic);

    useEffect(() => {
        const getColor = () => {
            if (props.color == "Red") {
                setPic(Red);
            }
            if (props.color == "Green") {
                setPic(Green);
            }
            if (props.color == "Blue") {
                setPic(Blue);
            }
            if (props.color == "Purple") {
                setPic(Purple);
            }
            if (props.color == "Yellow") {
                setPic(Yellow);
            }
            if (props.color == "Orange") {
                setPic(Orange);
            }
            if (props.color == "Pink") {
                setPic(Pink);
            }
            if (props.color == "Black") {
                setPic(Black);
            }
            if (props.color == "White") {
                setPic(White);
            }
            if (props.color == "Brown") {
                setPic(Brown);
            }
        };
        getColor();
    }, []);

    return (
        <div className="card">
            <Link to={`/info/${props.id}`} key={props.id}>
            <div className="container">
                <h3>Name: {props.name}</h3>
                <h3>Speed: {props.speed}</h3>
                <h3>Color: {props.color}</h3>
                <img className="card-img" src={pic} />
            </div>
            <Link to={`/edit/${props.id}`}><button>Edit Crewmate</button></Link>
            </Link>
        </div>  
    );
};

export default Card;