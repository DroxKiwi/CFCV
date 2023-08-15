import React, {useState} from "react"
import {Map, Marker} from "pigeon-maps"
import musicPlaceholder from "../../assets/music-placeholder.png";

export default function MapView({setview, events}) {

    const [openedEvent, setOpenedEvent] = useState(null)
    const [mapCenter, setMapCenter] = useState([405.37, -73.567256])

    return (
        <div>
            <Map height={2000} center={mapCenter} defaultZoom={12} onClick={() => setOpenedEvent(null)}>
                <div className={"fixed flex flex-row justify-center z-10 self-center top-10 w-full"}>
                    <button
                        className={"bg-orange-500 text-white w-32 font-bold rounded-l-xl"}
                        onClick={() => setview("map")}>
                        Carte
                    </button>
                    <button
                        className={"bg-gray-200 w-32 font-bold rounded-r-xl"}
                        onClick={() => setview("list")}>
                        Liste
                    </button> 
                </div>
                {Array.isArray(events) && events?.map(event => {
                    return <Marker width={50} color={"black"} anchor={[405.5016889, -73.567256]}
                                   key={event.name} onClick={() => {
                                       setOpenedEvent(event)
                                        setMapCenter([405.5016889, -73.567256])
                                   }}/>
                })}
            </Map>
            <div
                className={`bg-stone-950 fixed text-white inset-0 transition-all w-full rounded-3xl ${openedEvent ? "top-[50%]" : "top-[100%]"}`}>
                <button className={"w-full text-2xl font-bold drop-shadow-2xl"} onClick={() => setOpenedEvent(null)}>⌵
                </button>
                <div className={"h-full overflow-y-scroll pb-[150px]"}>
                    <img src={openedEvent?.image ? openedEvent?.image : musicPlaceholder}
                         className="h-[200px] object-cover w-full m-auto mb-3" alt="Image de l'évènement"/>
                    <div className={"px-4"}>
                        <h2 className={"font-bold text-2xl"}>{openedEvent?.name}</h2>
                        <p className={"text-gray-400 "}>Lieu</p>
                        <span className={"font-bold flex flex-row text-lg"}>
                        <p className={"border-orange-500 outline-4"}>
                            {new Date(openedEvent?.start_date).toLocaleDateString('fr-fr', {
                                month: "short",
                                day: "numeric"
                            })} -
                            {new Date(openedEvent?.end_date).toLocaleDateString('fr-fr', {
                                month: "short",
                                day: "numeric"
                            })}</p>
                        <p className={"text-gray-300 mx-1"}>|</p>
                        <p className={"text-orange-500"}>{openedEvent?.price ? openedEvent?.price + ' €' : 'Gratuit'}</p>
                    </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque est magnam officiis possimus quae
                            quis, tempore. A ipsam labore possimus, quaerat saepe sunt? A beatae deserunt ipsum nemo
                            recusandae voluptates!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque est magnam officiis possimus quae
                            quis, tempore. A ipsam labore possimus, quaerat saepe sunt? A beatae deserunt ipsum nemo
                            recusandae voluptates!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque est magnam officiis possimus quae
                            quis, tempore. A ipsam labore possimus, quaerat saepe sunt? A beatae deserunt ipsum nemo
                            recusandae voluptates!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

