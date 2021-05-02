import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/events/error-alert";

const FilteredEventsPage = () => {
    const router = useRouter()
    const filterData = router.query.slug;


    if (!filterData) {
        return <p className='center'>...Loading</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <ErrorAlert>
            <p>유효하지 않은 값입니다.</p>
        </ErrorAlert>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
            <ErrorAlert>
                <p>이벤트를 찾을 수 없습니다.</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>모든 이벤트 보기</Button>
            </div>
        </>
    }

    const date = new Date(numYear, numMonth - 1)

    return (
        <div>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </div>
    )
}

export default FilteredEventsPage