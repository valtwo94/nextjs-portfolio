import Link from "next/link";
import cl from './button.module.css'

const Button = (props) => {
 return (
     <Link href={props.link}>
         <a className={cl.btn}>{props.children}</a>
     </Link>
 )
}

export default Button