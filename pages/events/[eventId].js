import {useRouter} from "next/router";
import {getEventById} from "../../dummy";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/events/error-alert";

const SelectedEventPage = () => {
    const router = useRouter()

    const eventId = router.query.eventId
    const event = getEventById(eventId);

    if (!event) {
        return <ErrorAlert>
            <p>이벤트를 찾을 수 없습니다.</p>
        </ErrorAlert>
    }


    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export default SelectedEventPage