import CitySearch from "./CitySearch"

interface Props {
    viewing?: string,
    className?:string
}

export default function Navbar({ viewing, className }: Props) {
    return (
        <nav className={ className ? className : ""}>
            <ul className="text-white md:flex text-center md:text-start justify-between my-10">
                <li className="text-4xl tracking-wider mb-5 md:mb-0">Local<span className="text-green-500 font-bold">News</span></li>
                <li className="">
                    <CitySearch></CitySearch>
                </li>
            </ul>
        </nav>
    )
}