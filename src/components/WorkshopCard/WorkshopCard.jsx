import "./WorkshopCard.css";

export default function WorkshopCard({ workshop, handleWorkshopPick, selectedWorkshopId }) {



  return (<article className="workshop-card">
            <h3>{workshop.title}</h3>
            <h4>Plats: {workshop.location}</h4>
            <p>{workshop.category}</p>
            <small>Duration: {workshop.durationMinutes} min. Price: {workshop.priceSek} SEK</small>
            <h4>Tillfällen:</h4>
            <ul>
              {/* problem: vi har en ojämnt antal tillfällen beoende på vilken workshop */}
              {/* Lösning: map kommer att rita ut alla slots som finns i arrayen, 2 eller 3 (eller 79) st spelar ingen roll. */}
              {/* <li>{workshop.slots[0].startsAt}, platser kvar: {workshop.slots[0].placesLeft}</li>
              <li>{workshop.slots[1].startsAt}, platser kvar: {workshop.slots[1].placesLeft}</li>
              <li>{workshop.slots[2].startsAt}, platser kvar: {workshop.slots[2].placesLeft}</li> */}
              {workshop.slots.map(slot => <li key={slot.id}>
                                            {slot.startsAt}, platser kvar: {slot.placesLeft}

                                            { slot.placesLeft > 0 && 
                                                  <button
                                                  className={slot.id === selectedWorkshopId ? 'selected-button': ''}
                                                  onClick={() => handleWorkshopPick(slot.id)}>{ slot.id === selectedWorkshopId ? 'Vald' : 'Välj' }</button>
                                            }
                                          </li>)}
            </ul>
          </article>);
}