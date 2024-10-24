import CitySearch, { City } from "./CitySearch"
import useStore from "../functions/store";

interface Props {
    className?:string
}

export default function Navbar({ className}: Props) {


    const selectedCity = useStore((state) => state.selectedCity);
    const setSelectedCity = useStore((state) => state.setSelectedCity);

    return (
        <nav className={ className ? className : ""}>
            <ul className="text-white md:flex text-center md:text-start justify-between my-10">
                <li className="text-4xl tracking-wider mb-5 md:mb-0">Local<span className="text-green-500 font-bold">News</span></li>
                <li className="">
                    <CitySearch
                    ></CitySearch>
                </li>
            </ul>
        </nav>
    )
}