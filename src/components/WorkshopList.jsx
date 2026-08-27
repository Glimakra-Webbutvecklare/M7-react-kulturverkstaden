import WorkshopCard from "./WorkshopCard/WorkshopCard";
import "./WorkshopList.css";

// vill: ta emot props som innehåller all workshop data
// lista alla works med WorkshopCard

function WorkshopList({ workshops, selectedSlotId, handleWorkshopPick }) {
   console.log('workshops', workshops);
    return (<div>
        <p>Din valda workshop: {selectedSlotId}</p>
        <div className="workshop-list">
            {/* <WorkshopCard title={workshops[0].title} location={"Glimåkra"}/>
            <WorkshopCard title={workshops[1].title} location={"Glimåkra"}/>
            <WorkshopCard title={workshops[2].title} location={"Glimåkra"}/> */}
            {workshops.map(workshop => <WorkshopCard key={workshop.id} 
                                                     workshop={workshop}
                                                     selectedSlotId={selectedSlotId} 
                                                     handleWorkshopPick={handleWorkshopPick}/>)}
        </div>
    </div>);
}

export default WorkshopList;
