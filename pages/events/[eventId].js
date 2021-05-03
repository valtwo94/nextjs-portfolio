import Head from "next/head";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/events/error-alert";
import { getEventById, getFeaturedEvents} from "../../helpers/api-util";

const SelectedEventPage = (props) => {
   const {event} = props

    if (!event) {
        return <ErrorAlert>
            <p>이벤트를 찾을 수 없습니다.</p>
        </ErrorAlert>
    }


    return (
        <>
            <Head>
                <title>{event.title}</title>
                <meta name="description"
                      content={event.description}
                />
            </Head>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export async function getStaticProps(context){
    const eventId = context.params.eventId
    const event = await getEventById(eventId)

    return {
        props:{
            event: event
        }
    }
}

export async function getStaticPaths(){
    const events = await getFeaturedEvents()
    const paths = events.map(event => ({params: {eventId: event.id}}))

    return {
        paths:paths,
    fallback: 'blocking'
    }
}

export default SelectedEventPage