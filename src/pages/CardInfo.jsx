import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../client";

const CardInfo = () => {
    const {id} = useParams();
    const [card, setCard] = useState([]);
    const [description, setDescription] = useState("?");

    useEffect(() => {
        // Read all cards from the database table
        const fetchCards = async () => {
            const {data} = await supabase
                .from("Crewmates")
                .select()
                .order("created_at", {ascending: true});
            setCard(data);
        };
        fetchCards();

        // const getDescription = () => {
        //     const speed = parseInt(card[0].speed, 10);
        //     if (speed < 0) {
        //         setDescription(`Why is ${card[0].name} going backwards?`);
        //     } else if (speed < 50) {
        //         setDescription(`${card[0].name} is kind of slow...`)
        //     } else if (speed < 100) {
        //         setDescription(`${card[0].name} is decently fast.`)
        //     } else if (speed < 200) {
        //         setDescription(`${card[0].name} is quite speedy!`)
        //     } else if (speed < 300) {
        //         setDescription(`${card[0].name} is really picking up the pace!`)
        //     } else if (speed < 400) {
        //         setDescription(`${card[0].name} is blazing fast!`)
        //     } else if (speed < 500) {
        //         setDescription(`${card[0].name} is zooming in space!`)
        //     } else {
        //         setDescription(`${card[0].name} is breaking the SOUND BARRIER!`)
        //     }
        // };

        // getDescription();
    }, []);

    if (card.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-info">
            <h1>Crewmate: {card[0].name}</h1>
            <h2>Stats:</h2>
            <h3>Speed: {card[0].speed}</h3>
            <h3>Color: {card[0].color}</h3>
            <h3>{description}</h3>
            <Link to={`/edit/${card[0].id}`}><button className="edit-button">Edit Crewmate</button></Link>
        </div>
    );
};

export default CardInfo;