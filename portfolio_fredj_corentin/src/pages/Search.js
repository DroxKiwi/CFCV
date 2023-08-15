import React, {useEffect} from "react"
import MapView from '../components/search/Map'
import ListView from "../components/search/List";
import {useState} from "react";

export default function Search() {

    const [view, setView] = useState("map")
    const [events, setEvents] = useState({})

    useEffect(() => {
        const getEvents = async () => {
            const response = await fetch("http://backendv2.bewaveofficial.com/api/getevents")
            const jsonData = await response.json()
            setEvents(jsonData)
        }

        getEvents()
    })

    return (

        <>
            {view === "map" && <MapView setview={setView} events={events}/>}
            {view === "list" && <ListView setview={setView} events={events}/> }
        </>
    );
};

