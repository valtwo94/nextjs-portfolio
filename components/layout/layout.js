import MainHeader from "./main-header";

const Layout = (props) => {
    return <>
        <main>
            <MainHeader/>
            {props.children}
        </main>
    </>


}



export default Layout