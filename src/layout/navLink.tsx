import {FC} from "react";
import {NavLinkInterface} from "../utils/interfaces";
import {Link} from "react-router-dom";

export const NavLink: FC<NavLinkInterface> = ({navLocation, location, children}) => {
    return (
        <Link
            to={navLocation}
            className={(location === navLocation) ? "nav-active" : ""}>
            {children}
        </Link>
    );
};
