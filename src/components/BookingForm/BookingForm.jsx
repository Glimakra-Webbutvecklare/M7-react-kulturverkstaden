import { useState } from "react";

function BookingForm({selectedSlotId, reserveSpot}) {
    // utkast för bokning, uppdateras medans user skriver
    const [bookingDraft, setBookingDraft] = useState({
        name: "",
        email: "",
        participants: 1,
        message: ""
    });

    // bekräftad bokning, initellt tom
    const [booking, setBooking] = useState(null);

    const handleSubmit = (evt, spotId) => {
        evt.preventDefault();

        reserveSpot(spotId);

        // bekräfta bokningen
        if (bookingDraft.name.length > 0 && bookingDraft.email.includes("@")) {
            setBooking(current => ({ ...bookingDraft, spotId: spotId}) )
        }
    }

    const updateDraft = (field, value) => {
        // Uppdatera bookingdraft med nya namnet
        setBookingDraft(current => ({ ...current, [field]: value }) );
    };

    return (<div>
                <h2>Boka din plats för {selectedSlotId}</h2>
                { booking !== null && <p>Bokning är bekräftad! Namn: {booking.name}, Email: {booking.email}</p>}
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