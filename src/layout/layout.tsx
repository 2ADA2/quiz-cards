import {Link, Outlet, useLocation} from "react-router-dom";
import "../styles/layout.css";
import {NavLink} from "./navLink";

export const Layout = () => {
    let location = useLocation().pathname

    console.log(location)
    return (
        <>
            <header>
                <h1>Quiz</h1>
                <nav>
                    <NavLink navLocation={"/"} location={location} children = {"Главная"}/>
                    <NavLink navLocation={"/catalogue"} location={location} children = {"Каталог"}/>
                    <NavLink navLocation={"/profile"} location={location} children = {"Профиль"}/>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <nav>
                    <span>Навигация по приложению</span>
                    <Link to={"/"} onClick={() => window.scrollTo(0,0)}>Главная</Link>
                    <Link to={"/profile"} onClick={() => window.scrollTo(0,0)}>Профиль</Link>
                    <Link to={"/catalogue"} onClick={() => window.scrollTo(0,0)}>Каталог</Link>
                </nav>
                <nav>
                    <span>Социальные сети</span>
                    <a href={"https://github.com/2ADA2"} target={"_blank"} >git</a>
                    <a href={"https://github.com/2ADA2"} target={"_blank"} >skype</a>
                    <a href={"https://github.com/2ADA2"} target={"_blank"} >instagram</a>
                    <a href={"https://github.com/2ADA2"} target={"_blank"} >telegram</a>
                </nav>
            </footer>
        </>
    )
}


