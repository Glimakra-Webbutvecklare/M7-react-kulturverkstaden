
function BookingForm({selectedSlotId, reserveSpot}) {

    const handleSubmit = (evt, workshopId) => {
        evt.preventDefault();

        reserveSpot(workshopId);
    }

    return (<div>
                <h2>Boka din plats för {selectedSlotId}</h2>
                <form onSubmit={(evt) => handleSubmit(evt, selectedSlotId)}>
                    <div>
                        <label htmlFor="name">Namn:</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="message">Meddelande:</label>
                        <textarea id="message"/>
                    </div>
                    <button>Boka</button>
                </form>
            </div>);
}

export default BookingForm;