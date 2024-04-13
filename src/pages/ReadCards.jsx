import { useState, useEffect } from "react";
import { supabase } from "../../client";
import Card from "../components/Card";

const ReadCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Read all cards from the database table
        const fetchCards = async () => {
            const {data} = await supabase
                .from("Crewmates")
                .select()
                .order("created_at", {ascending: true});
            setCards(data);
        };

        fetchCards();
    }, []);
    
    return (
        <div className="read-cards">
            <h1 className="read-cards-title">Your Crewmate Gallery!</h1>
            <div className="read-cards-gallery">
                {
                    cards && cards.length > 0 ?
                    cards.map((card, index) => 
                        <Card key={index} id={card.id} name={card.name} speed={card.speed} color={card.color} />
                    ) : <h2>{'No Crewmates Yet 😞'}</h2>
                }
            </div>
        </div>
    );
};

export default ReadCards;