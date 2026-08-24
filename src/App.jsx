// src/App.jsx
//import WorkshopCard from "./components/WorkshopCard/WorkshopCard";
import WorkshopList from "./components/WorkshopList";

function App() {

  // från databas med workshops
  const workshops = [
    {
      id: "keramik",
      title: "Keramik för nybörjare",
      category: "Hantverk",
      description: "Forma skånsk rålera.",
      durationMinutes: 120,
      priceSek: 350,
      location: "Glimåkra",
      slots: [
        { id: "keramik-tis", startsAt: "Tisdag 18.00", placesLeft: 8 },
        { id: "keramik-tor", startsAt: "Torsdag 18.00", placesLeft: 2 },
      ],
    },
    {
      id: "virke",
      title: "Keramik för nybörjare",
      category: "Hantverk",
      description: "Arbeta med gottlänskt ullgarn.",
      durationMinutes: 90,
      priceSek: 450,
      location: "Osby",
      slots: [
        { id: "virke-mon", startsAt: "Måndag 18.00", placesLeft: 6 },
        { id: "virke-ons", startsAt: "Onsdag 18.00", placesLeft: 3 },
      ],
    },
    {
      id: "oljemalning",
      title: "Oljemålning för nybörjare",
      category: "Konst",
      description: "Måla med linolja på gammeldags duk",
      durationMinutes: 60,
      priceSek: 250,
      location: "Hässleholm",
      slots: [
        { id: "oljemalning-tis", startsAt: "Tisdag 18.00", placesLeft: 4 },
        { id: "oljemalning-tor", startsAt: "Torsdag 18.00", placesLeft: 1 },
        { id: "oljemalning-fre", startsAt: "Fredag 18.00", placesLeft: 2 },
      ],
    }
  ]

  const title = "Kulturverkstaden";


  // Ovning 1 - map
  // const people = [{id: 1, name:"Henry", age: 33}, {id: 2, name: "Konrad", age: 31}, {id: 3, name: "Sara", age: 39}]

  return (
    <main>
      <h1>{title}</h1>
      <WorkshopList workshops={workshops}/>

      {/* Använd map för att rita ut varje person i en paragraph t.ex <p>Henry is 33 years old.</p> */}
      {/* {people.map(person => <p key={person.id}>{person.name} is {person.age} years old.</p>)} */}
    </main>
  );
}

export default App;