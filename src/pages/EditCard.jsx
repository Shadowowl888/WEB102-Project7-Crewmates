import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";
import AmongUsPic from "../assets/amongus-2.png";

const EditCard = () => {
    const {id} = useParams();
    const [card, setCard] = useState({id: null, name: "", speed: 0, color: ""});
    const colors = ["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Brown", "Black", "White"];

    useEffect(() => {
        const grabCurrentInfo = async (event) => {
            event.preventDefault();
            const {data, error} = await supabase
                .from("Crewmates")
                .select()
                .eq("id", id)
                .single();
            if (error) {
                throw error;
            }
            if (data) {
                setCard(data);
            }
        };
        grabCurrentInfo();
    }, [id]);

    const updateCard = async (event) => {
        event.preventDefault();
        await supabase
            .from("Crewmates")
            .update({name: card.name, speed: card.speed, color: card.color})
            .eq("id", id);
        window.location = "/gallery";
    };
    
    const deleteCard = async (event) => {
        event.preventDefault();
        await supabase
            .from("Crewmates")
            .delete()
            .eq("id", id);
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
        <div className="edit-card">
            <h1>Update Your Crewmate!</h1>
            <img className="amongus-img" src={AmongUsPic} />
            <h4>Current Crewmate Info:</h4>
            <p>{`Name: ${card.name} | Speed: ${card.speed} | Color: ${card.color}`}</p>
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
                
                <input className="update-button" type="submit" value="Update Crewmate" onClick={updateCard} />
                <input className="delete-button" type="submit" value="Delete Crewmate" onClick={deleteCard} />
            </form>
        </div>
    );
};

export default EditCard;