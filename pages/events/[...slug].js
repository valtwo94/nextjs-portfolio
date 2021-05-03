import Head from "next/head";
import {getFilteredEvents} from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/events/error-alert";

const FilteredEventsPage = (props) => {
    const {hasError, events, date} = props


    if (hasError) {
        return <ErrorAlert>
            <p>유효하지 않은 값입니다.</p>
        </ErrorAlert>
    }



    return (
        <div>
            <Head>
                <title>Filtered Events</title>
                <meta name="description"
                      content={`All events for ${date.month}/${date.year}`}
                />
            </Head>
            <ResultsTitle date={date}/>
            <EventList items={events}/>
        </div>
    )
}

export async function getServerSideProps(context){
    const {params} = context
    const filterData = params.slug;


    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
            props:{hasError: true}
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth
    })


    return {
        props: {
            events: filteredEvents,
            date:{
                year: numYear,
                month: numMonth
            }
        }
    }
}

export default FilteredEventsPage