import { Link } from "react-router-dom";


export default function NotFoundPage() {
  return (<main><h1>Not found</h1>
          <p>Tillbaka <Link to="/">hem</Link></p>
  </main>);
}