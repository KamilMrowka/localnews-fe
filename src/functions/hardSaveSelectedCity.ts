import { City } from "../components/CitySearch";

interface Props {
    setCity: React.Dispatch<React.SetStateAction<City>>,
    city: City,
}

export default function hardSaveSelectedCity( { setCity, city}: Props ) {
    sessionStorage.setItem("selected-city", JSON.stringify(city));
    setCity(city);
}