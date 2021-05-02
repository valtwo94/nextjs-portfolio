import EventItem from "./event-item";
import cl from './event-list.module.css'

const EventList = ({items}) => {


    return <ul className={cl.list}>
        {items.map(event => <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
        />)}
    </ul>

}

export default EventList