// Skapa en komponent ConfirmationCard
// Den ska ta emot name, email, participants och workshopTitle
// Rita den i App.jsx som test

export default function ConfirmationCard({name, email, participant, workshopTitle}) {

    return (
        <section>
            <h2>Tack {name}!</h2>
            <p>Din plats på <strong>{workshopTitle}</strong> är bokad.</p>
            <p>email: {email}</p>
            <p>Antal deltagare: {participant}</p>
        </section>
    );
}