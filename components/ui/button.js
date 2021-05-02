import Link from "next/link";
import cl from './button.module.css'

const Button = (props) => {

    if(props.link){
        return (
            <Link href={props.link}>
                <a className={cl.btn}>{props.children}</a>
            </Link>
        )
    }

    return <button className={props.className} onClick={props.onClick}>{props.children}</button>




}

export default Button