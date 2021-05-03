import Head from "next/head";
import Link from 'next/link'
import {getAllEvents} from "../../helpers/api-util";
import {useRouter} from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = (props) => {
    const {events} = props
    const router = useRouter()

    const findEventsHandler = async (year, month) => {
        const fullPath = `/events/${year}/${month}`
        await router.push(fullPath)
    }

    return (
        <>
            <Head>
                <title>NextJS Event</title>
                <meta name="description"
                    content="Find a lot of great events that allow you to evolve"
                />
            </Head>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </>
    )
}


export async function getStaticProps(){
    const events = await getAllEvents()

    return {
        props:{
            events: events
        },
        revalidate: 60
    }
}

export default AllEventsPage