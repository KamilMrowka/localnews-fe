interface Props {
    viewing?: string,
    className?:string
}

export default function Navbar({ viewing, className }: Props) {
    return (
        <nav className={ className ? className : ""}>
            <ul className="text-white flex justify-between my-10">
                <li>LocalNews</li>
                <li>
                    <form>
                        <input type="text" placeholder="Find your city" className="rounded-xl p-1 text-white bg-gray-600"></input>
                    </form>
                </li>
                <li>
                    Scope: {viewing ? viewing : "Global"}
                </li>
            </ul>
        </nav>
    )
}