import WorkshopList from "../components/WorkshopList";
import { Link } from "react-router-dom";


export default function HomePage({workshops}) {
  return (
      <main>
          <h1>Home Page</h1>
          <WorkshopList workshops={workshops} />
      </main>);
}