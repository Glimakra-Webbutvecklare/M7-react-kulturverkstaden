// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WorkshopList from "./components/WorkshopList";
import BookingForm from "./components/BookingForm/BookingForm";
import HomePage from "./pages/HomePage";
import WorkshopsPage from "./pages/WorkshopsPage";
import NotFoundPage from "./pages/NotFoundPage";

// Upgift: refaktorera sid-komponenterna till en egen map
// som heter `pages`
// importera in i App.jsx få sidorna att fungera som innan

function App() {

  return (<Routes>
    <Route path="/" element={<HomePage /> } /> 
    {/* Uppgift: Lägg till en ny Route: /workshops -> <h1>Workshops Page</h1> */}
    <Route path="/workshops" element={ <WorkshopsPage /> } /> 

    {/* Refaktorera sidan till pages/NotFoundPage.jsx */}
    <Route path="*" element={<NotFoundPage />}/>
  </Routes>);

  const [selectedSlotId, setSelectedSlotId] = useState(null);
  // från databas med workshops
  const [workshops, setWorkshops] = useState([
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
      title: "Virke för nybörjare",
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
  ]);

  const pickWorkshopId = (id) => {
    // setSelectedSlotId beskriver hur den state-fulla variabel förändras
    // react kommer då kunna reagera och rita om DOMen
    setSelectedSlotId(selectedSlotId => id);
  }

  // möjliggör ta reservera en plats
  // på angiven workshop
  const reserveSpot = (workshopId) => {
    // vi behöver skapa en helt ny array 
    // med den nya förändringen
    const newWorkshops = [...workshops];
    // gå igenom alla workshops
    for (const workshop of newWorkshops) {
      // gå igenom alla slots
      for (const slot of workshop.slots) {
        // om vi hittar rätt slot som ska reserveras..
        if (slot.id === workshopId && slot.placesLeft > 0) {
          slot.placesLeft -= 1; // ta bort ett
        }
      }
    }

    setWorkshops(workshops => newWorkshops)
  }



  const title = "Kulturverkstaden";


  // Ovning 1 - map
  // const people = [{id: 1, name:"Henry", age: 33}, {id: 2, name: "Konrad", age: 31}, {id: 3, name: "Sara", age: 39}]
  
  // en vanlig varibel fungerar inte om vi vill att react ska regera på förändringar
  // istället ska vi använda en så kallad hook som kallas useState
  // -- let count = 0;

  // useState skapar en speciel variabel som react håller koll på
  // Den kommer uppdatera DOMen om förändring sker
  const [count, setCount] = useState(10); 

  // const increment = () => {
  //   //count = count + 1;  // manuel förändring fungerar ej. vi ska använda setCount istället
  //   setCount(count => count + 1); // beskriv hur värdet ska ändras med en funktion
  //   console.log(count) 
  // }

  // const decrement = () => {
  //   // Uppgift: minska count med 1 vid knapptryck
  //   setCount(count => count - 1); // beskriv hur värdet ska ändras med en funktion
  // }

  // hjälpvariabel för att öka läsbarheten
  const hasChosenWorkshop = selectedSlotId !== null;

  return (
    <main>
      {/* <h2>Räknare exempel</h2>
      <p>Nyvarande count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}

      <h1>{title}</h1>

      {/* Vi kan använder Tenary operator (?) för att sätta vilkor 
      när något ska ritas ut. <Vilkor> ? <OM sant> : <Om falskt> */}
      {/* { selectedSlotId !== null ? <BookingForm /> : ''} */}

      {/* Ett alternativ om man ej vill ha ett alternativ för falsk */}
      {hasChosenWorkshop && <BookingForm selectedSlotId={selectedSlotId} reserveSpot={reserveSpot}/>}


      {/* <button onClick={() => pickWorkshopId('test-workshop')}>Test</button> */}
      <WorkshopList workshops={workshops} selectedSlotId={selectedSlotId} handleWorkshopPick={pickWorkshopId}/>

      {/* Använd map för att rita ut varje person i en paragraph t.ex <p>Henry is 33 years old.</p> */}
      {/* {people.map(person => <p key={person.id}>{person.name} is {person.age} years old.</p>)} */}
    </main>
  );
}

export default App;