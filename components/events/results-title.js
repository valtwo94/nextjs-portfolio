import Button from "../ui/button";
import cl from './results-title.module.css'

const ResultsTitle = (props) => {
    const {date} = props;


    return (
        <section className={cl.title}>
            <h1>{`${date.year}년 ${date.month}월`} 이벤트</h1>
            <Button link='/events'>모든 이벤트 보여주기</Button>
        </section>
    )
}

export default ResultsTitle