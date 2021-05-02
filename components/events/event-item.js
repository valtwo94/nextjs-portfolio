
import cl from  './event-item.module.css'
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({title, image, date, location, id}) => {

    const formatDate =
        new Date(date).toLocaleDateString('ko-KR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

    const formattedAddress = location.replace(',', '\n')
    const exploreLink = `/events/${id}`

    return (
        <li key={id} className={cl.item}>
            <img src={'/' + image} alt="이벤트 이미지"/>
            <div >
                <div className={cl.content}>
                    <h2 className={cl.summary}>{title}</h2>
                    <div className={cl.date}>
                        <DateIcon/>
                        <time >{formatDate}</time>
                    </div>
                    <div className={cl.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={cl.actions}>
                    <Button link={exploreLink}>
                        <span>이벤트 확인</span>
                        <span className={cl.icon}><ArrowRightIcon/></span>
                        </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem