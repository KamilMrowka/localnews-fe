import Navbar from "../components/Navbar";
import useStore from "../functions/store";

export default function ArticlePage() {

    const selectedCity = useStore((state) => state.selectedCity);
    const setSelectedCity = useStore((state) => state.setSelectedCity);

    return (
        <div>
            <Navbar></Navbar>
        </div>
    )
}