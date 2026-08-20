import "./WorkshopCard.css";

export default function WorkshopCard({title, category, durationMinutes, priceSek, location}) {

  return (<article className="workshop-card">
            <img src="https://picsum.photos/200" alt="random picture"/>
            <h3>{title}</h3>
            <h4>Plats: {location}</h4>
            <p>{category}</p>
            <small>Duration: {durationMinutes} min. Price: {priceSek} SEK</small>
          </article>);
}