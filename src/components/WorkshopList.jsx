import WorkshopCard from "./WorkshopCard/WorkshopCard";

// vill: ta emot props som innehåller all workshop data
// lista alla works med WorkshopCard

function WorkshopList({ workshops }) {
   console.log('workshops', workshops);
    return (<div>
        {/* <WorkshopCard title={workshops[0].title} location={"Glimåkra"}/>
        <WorkshopCard title={workshops[1].title} location={"Glimåkra"}/>
        <WorkshopCard title={workshops[2].title} location={"Glimåkra"}/> */}

        {workshops.map(workshop => <WorkshopCard key={workshop.id} workshop={workshop}/>)}
    </div>);
}

export default WorkshopList;
