import { Link } from "react-router-dom";


export default function HomePage() {
  return (<main><h1>Home Page</h1>
          <p>Se vårt utbud <Link to="/workshops">här</Link></p>
  </main>);
}