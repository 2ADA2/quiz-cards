import {CATALOGUE_ROUTE, LANDING_ROUTE, PROFILE_ROUTE} from "../utils/consts";
import {lazily} from "react-lazily";

const { Profile } = lazily(() => import('../pages/profile'));
const { Landing } = lazily(() => import('../pages/landing'));
const { Catalogue } = lazily(() => import('../pages/catalogue'));

export const routes = [
    {
        path:PROFILE_ROUTE,
        Element:Profile
    },
    {
        path:LANDING_ROUTE,
        Element:Landing
    },
    {
        path:CATALOGUE_ROUTE,
        Element:Catalogue
    }
]