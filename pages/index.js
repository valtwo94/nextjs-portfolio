import Link from "next/link";
import {getFeaturedEvents} from "../dummy";
import EventItem from "../components/events/event-item";
import EventList from "../components/events/event-list";


const HomePage = () => {
    const featuredEvents = getFeaturedEvents()


    return (
        <div>
            <EventList items={featuredEvents}/>
        </div>
    )
}


export default HomePage