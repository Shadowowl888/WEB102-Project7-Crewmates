import { Link, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import './App.css'
import Home from "./pages/Home";
import ReadCards from "./pages/ReadCards";
import EditCard from "./pages/EditCard";
import CreateCard from "./pages/CreateCard";
import CardInfo from "./pages/CardInfo";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/gallery",
      element: <ReadCards />
    },
    {
      path: "/edit/:id",
      element: <EditCard />
    },
    {
      path: "/new",
      element: <CreateCard />
    },
    {
      path: "/info/:id",
      element: <CardInfo />
    }
  ]);
  
  return (
    <div className="App">
      <div className="header">
        <Link to="/"><button className="header-button">Home</button></Link>
        <Link to="/gallery"><button className="header-button">Crewmate Gallery</button></Link>
        <Link to="/new"><button className="header-button">Create a Crewmate</button></Link>
      </div>
      <div className="content">
        {element}
      </div>
    </div>
  );
};

export default App;