import Link from "next/link";
import cl from './main-header.module.css'


const MainHeader = () => {
    return (
        <header className={cl.header}>
            <div className={cl.logo}>
                <Link href='/'>
                    <a href="">다음 이벤트</a>
                </Link>
            </div>
            <nav className={cl.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a href="">모든 이벤트 확인하기</a>
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader