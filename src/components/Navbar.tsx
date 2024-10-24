import { useNavigate } from "react-router-dom"
import CitySearch, { City } from "./CitySearch"

interface Props {
    className?:string
    onHome?: () => void
}

export default function Navbar({ className, onHome }: Props) {

    const navigate = useNavigate()

    return (
        <nav className={ className ? className : ""}>
            <ul className="text-white md:flex text-center md:text-start justify-between my-10">
                <li onClick={onHome?onHome:()=>{navigate("/")}} className="hover:cursor-pointer text-4xl tracking-wider mb-5 md:mb-0">Local<span className="text-green-500 font-bold">News</span></li>
                <li className="">
                    <CitySearch
                    ></CitySearch>
                </li>
            </ul>
        </nav>
    )
}