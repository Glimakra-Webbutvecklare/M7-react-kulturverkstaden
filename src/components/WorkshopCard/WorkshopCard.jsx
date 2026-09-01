import { Link } from "react-router-dom";
import "./WorkshopCard.css";

export default function WorkshopCard({ workshop, handleWorkshopPick, selectedSlotId }) {



  return (<article className="workshop-card">
            <h3>{workshop.title}</h3>
            <h4>Plats: {workshop.location}</h4>
            <p>{workshop.category}</p>
            <small>Duration: {workshop.durationMinutes} min. Price: {workshop.priceSek} SEK</small>
            <p><Link to={`workshops/${workshop.id}`}>Välj tillfälle</Link></p>
          </article>);
}