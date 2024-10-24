import { City } from "../components/CitySearch";

interface Props {
    city: City,
    setSelectedCity: (city: City) => void
}

export default function hardSaveSelectedCity( {city, setSelectedCity}: Props ) {

    sessionStorage.setItem("selected-city", JSON.stringify(city));
    setSelectedCity(city);
}