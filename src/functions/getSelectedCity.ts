import { City } from "../components/CitySearch";

export default function( defaultCity: City ):City {
    if (!sessionStorage.getItem("selected-city")) {
        return defaultCity;
        } else {
        return JSON.parse(sessionStorage.getItem("selected-city") ||JSON.stringify(defaultCity));
    }
}