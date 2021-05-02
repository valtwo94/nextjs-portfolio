import {getAllEvents} from "../../dummy";
import {useRouter} from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = () => {
    const events = getAllEvents()
    const router = useRouter()

    const findEventsHandler = async (year, month) => {
        const fullPath = `/events/${year}/${month}`
        await router.push(fullPath)
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </>
    )
}

export default AllEventsPage