// src/App.jsx
function App() {

  const workshops = [{id: "keramik", title: "Keramtik", price: 100}, 
                     {id: "virka", title: "Virka", price: 200}, 
                     {id: "oljemalning", title: "Oljemålning", price: 350}]

  const title = "Kulturverkstaden";
  // done: skapa varibel för decription
  const description = "Min beskrivning";


  const myWorkshop = {id: "talja", title: "Täljning", price: 220};
  const openPlaces = 12;

  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{openPlaces} platser kvar</p>

      <p>{myWorkshop.title}</p>
    </main>
  );
}

export default App;