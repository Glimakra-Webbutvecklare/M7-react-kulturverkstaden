import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm/BookingForm";

export default function BookingPage({ workshops }) {
    const { workshopId } = useParams();
    const workshop = workshops.find(workshop => workshop.id === workshopId);

    return <BookingForm />
}