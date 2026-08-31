import { Link } from "react-router-dom";
// Uppg: använd Link komponenten för att 
// skapa en länk mellan workshopspage -> homepage

export default function WorkshopsPage() {
  return (<main>
    <h1>Workshops Page</h1>
    <p>Tillbaka <Link to="/">hem</Link></p>
    </main>);
}