import { useParams, Link } from "react-router-dom";

// Denna sidan ska visa upp all information
// av vald workshop inklusive dess slots
// vid vald slot ska man komma till en bokningssida
export default function DetailsPage({workshops, selectedSlotId, setSelectedSlotId}) {
    const { workshopId } = useParams();
    const workshop = workshops.find(workshop => workshop.id === workshopId);

    const handleSlotSelection = (id) => {
        // Välja ut vilken slot av workshop
        setSelectedSlotId(current => id);
    }

    return (<main>
        <h1>{workshop.title}</h1>
        <p>{workshop.description}</p>
        <small>{workshop.location}</small>
        <p>{workshop.priceSek} SEK</p>
        <h3>Tillfällen</h3>
        <ul>
            {workshop
                .slots.map(slot => <li key={slot.id}>
                                            [{slot.id}]: {slot.startsAt}, {slot.placesLeft} platser kvar <button onClick={() => handleSlotSelection(slot.id)}>Välj</button>
                                        </li>)}
        </ul>
        {selectedSlotId && <Link to={`/book/${workshopId}`}>Boka {selectedSlotId}</Link>}
    </main>);
}