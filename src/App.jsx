// src/App.jsx

function WorkshopCard(props) {

  //console.log(props);

  //return JSON.stringify(props);

  // kopplr data från props till mina variabler
  // const title = props.title;
  // const description = props.description;
  // const price = props.price;

  return (<article className="workshop-card">
            <img src="https://picsum.photos/200" alt="random picture"/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <small>Pris: {props.price}</small>
          </article>);
}

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
      <WorkshopCard title={workshops[0].title} description={workshops[0].description} price={workshops[0].price}/>
      <WorkshopCard title={workshops[1].title} description={workshops[1].description} price={workshops[1].price}/>
      <WorkshopCard title={workshops[2].title} description={workshops[2].description} price={workshops[2].price}/>
    </main>
  );
}

export default App;