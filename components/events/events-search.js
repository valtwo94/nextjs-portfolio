import Button from "../ui/button";
import cl from './events-search.module.css'
import {useRef} from "react";

const EventsSearch = (props) => {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault()
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth)

    }


    return <form className={cl.form} onSubmit={submitHandler}>
        <div className={cl.controls}>
            <div className={cl.control}>
                <label htmlFor='year'>연</label>
                <select id="year" ref={yearInputRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={cl.control}>
                <label htmlFor="month">월</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>

            </div>
        </div>
        <Button>이벤트 찾기</Button>
    </form>
}

export default EventsSearch