

import EventList from "../components/events/event-list";
import {getFeaturedEvents} from "../helpers/api-util";


const HomePage = (props) => {

    if(!props.events){
        return (
            <p>Loading</p>
        )
    }

    return (
        <div>
            <EventList items={props.events}/>
        </div>
    )
}

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents()
    console.log(featuredEvents)

    return {
        props: {
            events: featuredEvents
        }
    }
}


export default HomePage