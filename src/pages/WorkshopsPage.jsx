import { Link, useParams } from "react-router-dom";
import WorkshopList from "../components/WorkshopList";
// Uppg: använd Link komponenten för att 
// skapa en länk mellan workshopspage -> homepage

// Uppg. fyll i komponenten nedan för att skriva ut
// <p>Inga workshops med category: {category.toLowerCase()} </p>
function NoWorkshopsMessage({ category }) {
  return <p>Inga workshops med category: {category} </p>;
}

export default function WorkshopsPage({ workshops }) {

  const { category } = useParams();


  const categoryChecked = !category ? "" : category.toLowerCase();

  const shouldIncludeAll = categoryChecked.length === 0;

  // Vill: sortera eller filtrera workshops 
  // utifrån vald categori
  const filteredWorkshops = workshops
                                  .filter( workshop => workshop.category.toLowerCase() === categoryChecked || shouldIncludeAll ) 

  // givet en array med namn ["bob", "lisa", "daniel"]
  // mappa ut dem till <p>bob</p><p>lisa</p><p>daniel</p>
  // const names = ["bob", "lisa", "daniel"];
  // return names.map(name => <p key={name}>{name}</p>);
  
  return (<main>
    <h1>Workshops Page</h1>
    <p>category: {shouldIncludeAll ? "All Categories" : categoryChecked}</p>
    <p>Tillbaka <Link to="/">hem</Link></p>
    {/* Uppgift: Mappa ut alla workshops med workshopscard */}
    {/* {workshops.map( workshop => <WorkshopCard key={workshop.id} workshop={workshop}/> )} */}
    { filteredWorkshops.length > 0 ? 
            <WorkshopList workshops={filteredWorkshops} /> : <NoWorkshopsMessage category={category} />}
    </main>);
}


