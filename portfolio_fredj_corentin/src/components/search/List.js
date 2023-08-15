import musicPlaceholder from "../../assets/music-placeholder.png";

export default function ListView({setview, events}) {

    // STRUCTURE :

    // artists:{}
    // author_name:"admin"
    // description:"Un évènement à ne pas manquer"
    // display_map:true
    // end_date:"2023-05-30T00:00:00.000Z"
    // event_id:1
    // externalmedias:{}
    // images:{}
    // name:"Super évènement"
    // price:10
    // start_date:"2023-05-05T00:00:00.000Z"


    return (
        <div className={"text-white min-h-[100vh] py-20"}>
            <div className={"fixed flex flex-row justify-center self-center top-10 w-full"}>
                <button
                    className={"bg-gray-200 w-32 font-bold text-black rounded-l-xl"}
                    onClick={() => {
                        setview("map")
                    }}>
                    Carte
                </button>
                <button
                    className={"bg-orange-500 w-32 font-bold rounded-r-xl"}
                    onClick={() => setview("list")}>
                    Liste
                </button>
            </div>
            {Array.isArray(events) && events?.map(event => {
                return <div className={"mx-5 my-10"}>
                    <img src={event.image ? event.image : musicPlaceholder} className="h-[200px] object-cover w-full m-auto mb-3" alt="Image de l'évènement"/>
                    <h2 className={"font-bold text-2xl"}>{event.name}</h2>
                    <p className={"text-gray-400 "}>Lieu</p>
                    <span className={"font-bold flex flex-row text-lg"}>
                        <p className={"border-orange-500 outline-4"}>
                            {new Date(event.start_date).toLocaleDateString('fr-fr', {  month:"short", day:"numeric"}) } - {new Date(event.end_date).toLocaleDateString('fr-fr', {  month:"short", day:"numeric"}) }</p>
                        <p className={"text-gray-300 mx-1"}>|</p>
                        <p className={"text-orange-500"}>{event.price ? event.price + ' €' : 'Gratuit'}</p>
                    </span>
                </div>
            })}
        </div>
    );
};

