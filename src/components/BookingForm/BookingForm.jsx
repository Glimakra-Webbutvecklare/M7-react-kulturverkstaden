import { useState } from "react";

function BookingForm({workshopId, selectedSlotId, setConfirmBooking, setWorkshops}) {
    // utkast för bokning, uppdateras medans user skriver
    const [bookingDraft, setBookingDraft] = useState({
        name: "",
        email: "",
        participants: 1,
        message: ""
    });

    const handleSubmit = (evt, spotId) => {
        evt.preventDefault();

        //reserveSpot(spotId);
        // ändra i workshops arrayen (vårt data)
        // sådant att en plats har minskat
        setWorkshops(current => {
            
            //const newWorkshops = [...current]; // DETTA KOPIERAR INTE HELA ARRAYEN
            const newWorkshops = structuredClone(current); // Detta kopierar hela Workshops arrayen
            // workshops är en array med objekt som i sin tur har en array med objekt
            const selectedWorkshop = newWorkshops.find(workshop => workshop.id === workshopId);

            const selectedSlot = selectedWorkshop.find(slot => slot.id === selectedSlotId);

            selectedSlot.placesLeft--; // minska med ett

            return newWorkshops;
        });

        // bekräfta bokningen
        if (bookingDraft.name.length > 0 && bookingDraft.email.includes("@")) {
            setConfirmBooking(current => ({ ...bookingDraft, spotId: spotId}) )
            
            // navigera till confirm page
             
        }
    }

    const updateDraft = (field, value) => {
        // Uppdatera bookingdraft med nya namnet
        setBookingDraft(current => ({ ...current, [field]: value }) );
    };

    return (<div>
                <h2>Boka din plats för {selectedSlotId}</h2>
                <form onSubmit={(evt) => handleSubmit(evt, selectedSlotId)}>
                    <div>
                        <label htmlFor="name">Namn:</label>
                        <input type="text" name="name" id="name" onChange={(evt) => updateDraft('name', evt.target.value)} value={bookingDraft.name} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={(evt) => updateDraft('email', evt.target.value)} value={bookingDraft.email}/>
                    </div>
                    <div>
                        <label htmlFor="message">Meddelande:</label>
                        <textarea id="message" onChange={(evt) => updateDraft('message', evt.target.value)} value={bookingDraft.message}/>
                    </div>
                    <button>Boka</button>
                </form>
            </div>);
}

export default BookingForm;