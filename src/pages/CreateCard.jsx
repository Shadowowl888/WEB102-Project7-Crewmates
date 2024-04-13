import { useState } from "react";
import { supabase } from "../../client";
import AmongUsPic from "../assets/amongus-2.png";

const CreateCard = () => {
    const [card, setCard] = useState({name: "", speed: 0, color: ""});
    const colors = ["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Black", "White"];

    const createCard = async (event) => {
        event.preventDefault();
        await supabase
            .from("Crewmates")
            .insert({name: card.name, speed: card.speed, color: card.color})
            .select();
        window.location = "/gallery";
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCard((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    
    return (
        <div className="create-card">
            <h1 className="create-card-title">Create a New Crewmate!</h1>
            <img className="amongus-img" src={AmongUsPic} />
            <form>
                <label>Name</label> <br />
                <input type="text" id="name" name="name" value={card.name} onChange={handleChange} /> <br />
                <br />

                <label>Speed</label> <br />
                <input type="number" id="speed" name="speed" value={card.speed} onChange={handleChange} /> <br />
                <br />
                
                <label>Color</label> <br />
                <select className="color-selection" id="color" name="color" value={card.color} onChange={handleChange}>
                    {
                        colors.map(color => (
                            <option key={color} value={color}>{color}</option>
                        ))
                    }
                </select> <br />
                <br />

                <input className="create-button" type="submit" value="Create Crewmate" onClick={createCard} />
            </form>
        </div>
    );
};

export default CreateCard;