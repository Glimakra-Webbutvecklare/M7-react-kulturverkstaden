// src/App.jsx
import WorkshopCard from "./components/WorkshopCard";

// Ovning
// name, proffession, age, profile picture
function ProfileCard() {}


function App() {

  // från databas med workshops
  const workshops = [{id: "keramik", title: "Keramik", description: "Nybörjarkurs med fokus på skånsk rålera.",price: 100}, 
                     {id: "virka", title: "Virke",description: "Nybörjarkurs med fokus på gottlänskt ullgarn.", price: 200}, 
                     {id: "oljemalning", title: "Oljemålning", description: "Nybörjarkurs med fokus på smålänsk råolja.", price: 350}]

  const title = "Kulturverkstaden";
  // done: skapa varibel för decription
  const description = "Min beskrivning";


  const myWorkshop = {id: "talja", title: "Täljning", price: 220};
  const openPlaces = 12;

  return (
    <main>
      <h1>{title}</h1>
      <WorkshopCard 
        title="Keramik för nybörjare"
        category="Hantverk" // NY
        durationMinutes={120} // NY
        priceSek={350} // price -> priceSek
        location="stockholm"
      />

      <WorkshopCard 
        title="Virke för nybörjare"
        category="Hantverk" // NY
        durationMinutes={150} // NY
        priceSek={250} // price -> priceSek
        location="göteborg"
      />

      {/* uppgift: Lägg till ett nytt workshopCard med ny titel, kategori, etc */}
      {/* uppgift2: Lägg till en ny prop (egenskap) location som ska kunnas ritas ut */}
    </main>
  );
}

export default App;